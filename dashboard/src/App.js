import React from 'react';
import './App.scss';
import HeaderNav from './HeaderNav.js';
import Dashboard from './Dashboard';

class App extends React.Component {

  showCrypto(coin) {
    console.dir(coin.value);
  }

  render() {
    return (
      <div className="App">
        <HeaderNav />
        <Dashboard showCrypto={this.showCrypto} />
      </div>
    );
  }
}

export default App;
