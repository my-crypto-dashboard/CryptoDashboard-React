import React, {Component} from 'react';
import './App.scss';
import NavBar from './Components/Navigation/NavBar'
import { Route } from 'react-router-dom'
import Favorites from './Components/Favorites/Favorites'
import About from './Components/About/About'
import Wallets from './Components/Wallets/Wallets'
import Dashboard from './Components/Dashboard/Dashboard'
import Home from './Components/Home/Home'
import fire from './config/firebase';
import firebase from 'firebase';

// import Footer from './Components/Footer/Footer'



class App extends Component {

  constructor() {
    super();
    this.state = {
      user: 'null'
    }

    this.addPair = this.addPair.bind(this);
    this.authListener = this.authListener.bind(this);
    this.login = this.login.bind(this);
    this.showCrypto = this.showCrypto.bind(this);
  }


  componentDidMount() {
    this.authListener();
  }

  async addPair(pair1, pair2) {
    let db = await fire.firestore();
    let pair = {firstPair: pair1.id, secondPair: pair2.id};
    await db.collection("users")
        .doc(this.state.user.id)
        .update({ favorites: firebase.firestore.FieldValue.arrayUnion(pair)})
        .then((res) => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
  
  }

  authListener() {
    let db = fire.firestore();
      fire.auth().onAuthStateChanged((user) => {
        if(user) {
          db
          .collection("users")
          .doc(user.uid)
          .get().then(docSnapshot => {
            this.setState({user: docSnapshot.data()});
          })
        
      } else {
        this.setState({user:null});
      }
    });
  }

  login() {
    var provider = new firebase.auth.GoogleAuthProvider();
    let db = fire.firestore();
    return fire.auth()
    .signInWithPopup(provider)
    .then(async result => {
      await db
      .collection("users")
      .doc(result.user.uid)
      .get().then(docSnapshot => {
        if(!docSnapshot.data()){
            db.collection("users")
            .doc(result.user.uid)
            .set({
              email: result.user.email,
              id: result.user.uid,
              favorites: []
            });
            this.setState({user: {
              email: result.user.email,
              id: result.user.uid,
              favorites: []
            }});
        }
      })
      .catch(err => {
        console.log(err);
      })
    })
    .catch(err => {
      console.log(err);
    })
  }


  logout() {
    fire.auth().signOut()
    .then(res => {
      console.log(res);
      setTimeout(() => window.location.pathname = '/dashboard', 1000)
    })
    .catch(err => {
      console.log(err);
    })
  }
  
  showCrypto(coin) {
    console.dir(coin.value);
  }

  
  render(){
    return (
       
      <div className="App">
      <NavBar user={this.state.user} login={this.login} logout={this.logout}/>
      <Route exact path="/" render={ (props) => {
            return(<Home {...props} />)
          }} />
        <Route exact path="/dashboard" render={ (props) => {
            return(<Dashboard {...props} showCrypto={this.showCrypto} addPair={this.addPair} user={this.state.user}/>)
          }} />
        
        <Route exact path="/favorites" render={ (props) => {
            return(<Favorites {...props}  ids={['bitcoin','ethereum','bitBTC',"1irstcoin"]} />)
          }} />
        <Route exact path="/about" render={ (props) => {
            return(<About {...props} />)
          }} />
          <Route exact path="/wallets" render={ (props) => {
            return(<Wallets {...props} />)
          }} />
        
      </div>
      
      
    );

  }

  
 
}

export default App;
