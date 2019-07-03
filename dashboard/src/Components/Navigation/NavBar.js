import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../Assets/cryptdash-name.png'
import './navbar.scss'


const header = {
    background: '#212121',
    height: '50px',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    color: '#6049e6',
    zIndex: '2',
    boxShadow: '0px 6px 10px gray',
    boxShadow: '.1px 2.1px 3.1px #6049e6'
    
}
const link ={
    color: '#57b7bd',
    padding: '2px',
    paddingBottom: '4px',
    textDecoration: 'none'
     
}


const NavBar = (props) => {

return (

    <div style={header}>
        <img src ={logo} alt="" style={{height:'60px'}}/>
        <NavLink style={link}
            to = {'/dashboard'}
            activeStyle={{
                borderTop: '1px solid #6049e6', borderBottom: '1px solid #6049e6'}}>
            <span style={link}>Dashboard</span>
        </NavLink>
        <NavLink style={link}
            to ='/favorites'
            activeStyle={{
                borderTop: '1px solid #6049e6', borderBottom: '1px solid #6049e6'}}>
            <span className={'link'}>Favorites</span>
        </NavLink>
        <NavLink style={link}
            to ='/wallets'
            activeStyle={{
                borderTop: '1px solid #6049e6', borderBottom: '1px solid #6049e6'}}>
            <span style={link}>Wallets</span>
        </NavLink>
        <NavLink style={link}
            to ='/about'
            activeStyle={{
                borderTop: '1px solid #6049e6', borderBottom: '1px solid #6049e6' }}>
            <span style={link}>About</span>
        </NavLink>
        {
            props.user ? 
            <button onClick={() => {props.logout()}}>Logout</button>
            :
            <button onClick={() => {props.login()}}>Login</button>
            
        }
        
    </div>
)


}




export default NavBar