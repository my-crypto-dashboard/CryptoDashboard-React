import React, {Component} from 'react';
import './App.scss';
import HeaderNav from './HeaderNav.js';
import Dashboard from './Dashboard';
import fire from './config/firebase';
import firebase from 'firebase';

class App extends Component {

  constructor() {
    super();
    this.state = {
      user: null
    }
  }

  componentDidMount() {
    this.authListener();
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
      console.log(result);
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
    })
    .catch(err => {
      console.log(err);
    })
  }
  
  showCrypto(coin) {
    console.dir(coin.value);
  }

  render() {
    return (
      <div className="App">
        <HeaderNav user={this.state.user} login={this.login} logout={this.logout}/>
        <Dashboard showCrypto={this.showCrypto} />
      </div>
    );
  }
  
}

export default App;
