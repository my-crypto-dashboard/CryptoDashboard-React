import React, {Component} from 'react';
import './App.scss';
import HeaderNav from './HeaderNav.js';
<<<<<<< HEAD
import fire from './config/firebase';

class App extends Component {

  consturctor() {
    super();
    this.states = {
      user: null
    }
  }


=======
import Dashboard from './Dashboard';

class App extends React.Component {

  showCrypto(coin) {
    console.dir(coin.value);
  }

>>>>>>> 71ef6cba009da1f13d6e3e7ec99abd46a8aeba18
  render() {
    return (
      <div className="App">
        <HeaderNav />
<<<<<<< HEAD
      </div>
    );
  }
  
=======
        <Dashboard showCrypto={this.showCrypto} />
      </div>
    );
  }
>>>>>>> 71ef6cba009da1f13d6e3e7ec99abd46a8aeba18
}

export default App;
