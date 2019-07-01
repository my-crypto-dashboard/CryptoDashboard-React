import React from 'react';
import './App.scss';
import NavBar from './Components/Navigation/NavBar'
import { Route } from 'react-router-dom'
import Favorites from './Components/Favorites/Favorites'
import About from './Components/About/About'
import Wallets from './Components/Wallets/Wallets'


function App() {
  return (
    <div className="App">
      <NavBar/>
      <Route exact path="/favorites" render={ (props) => {
          return(<Favorites {...props} />)
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

export default App;
