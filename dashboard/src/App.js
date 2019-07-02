import React from 'react';
import './App.scss';
import HeaderNav from './HeaderNav.js';
import Dashboard from './Dashboard';


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <HeaderNav />
        <Dashboard />
      </div>
    );
  }
}

export default App;
