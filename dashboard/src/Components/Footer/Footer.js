import React from 'react'
import {NavLink} from 'react-router-dom'
import logo from '../Assets/cryptdash-name.png'


const footer = {
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
    textDecoration: 'none'
    
}


const Footer = () => {

return (

    <div style={footer}>
        <p>Cryptdash 2019</p>
    </div>
)


}




export default Footer