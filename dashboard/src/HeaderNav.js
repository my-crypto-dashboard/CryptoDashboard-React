import React from 'react';

export default function HeaderNav(props) {

  
    return (
        <header className="App-header">
            <img src="#" className="App-logo" alt="logo" />
            <p>
                <code>My Crypto Dashboard</code>
            </p>
            <nav>
                <a href='#'>Dashboard</a>
                <a href='#'>Favorites</a>
                <a href='#'>Wallets</a>
                <a href='#'>About</a>
                {props.user ? 
                <button onClick={() => {props.logout()}}>Logout</button>
                :
                <button onClick={() => {props.login()}}>Login</button>
                }
            </nav>
        </header>
    )
}



