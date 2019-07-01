import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../Assets/cryptdash-name.png'


const header = {
    background: '#212121',
    height: '50px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: '#6049e6',
    zIndex: '2',
    boxShadow: '0px 6px 10px gray'
    
}
const link ={
    color: '#57b7bd',
    textDecoration: 'none'
    
}


const NavBar = () => {

return (

    <div style={header}>
        <img src ={logo} alt="" style={{height:'60px'}}/>
        <NavLink style={link}
            to = {'/'}
            activeClassName="active-link">
            <span style={link}>Dashboard</span>
        </NavLink>
        <NavLink style={link}
            to ='favorites'
            activeClassName="active-link">
            <span style={link}>Favorites</span>
        </NavLink>
        <NavLink style={link}
            to ='wallets'
            activeClassName="active-link">
            <span style={link}>Wallets</span>
        </NavLink>
        <NavLink style={link}
            to ='about'
            activeClassName="active-link">
            <span style={link}>About</span>
        </NavLink>
        <NavLink style={link}
            to ='/'
            activeClassName="active-link">
            <span style={link}>Logout</span>
        </NavLink>

        
    </div>
)


}




export default NavBar