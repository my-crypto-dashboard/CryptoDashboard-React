import React, {Component} from 'react';
import './App.scss';
import HeaderNav from './HeaderNav.js';
import fire from './config/firebase';

class App extends Component {

  consturctor() {
    super();
    this.states = {
      user: null
    }
  }


  render() {
    return (
      <div className="App">
        <HeaderNav />
      </div>
    );
  }
  
}

export default App;
