import React from 'react';
import logo from '../src/img/cryptdash-name.png'

export default function HeaderNav() {


    return (
        <header className="App-header">
            <img src= {logo} className="App-logo" alt="logo" />
            {/* <p>
                <code>My Crypto Dashboard</code>
            </p> */}
            <nav>
                <a href='#'>Dashboard</a>
                <a href='#'>Favorites</a>
                <a href='#'>Wallets</a>
                <a href='#'>About</a>
                <a href='#'>Logout</a>
            </nav>
        </header>
    )
}



