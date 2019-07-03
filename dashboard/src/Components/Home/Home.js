import React from 'react'
import logo from '../Assets/cryptdash-name.png'
import '../../App.scss'

const Home = () => {

    const update = () => {
        setTimeout(() => window.location.pathname = '/dashboard', 1000)
    }

return (

    <div  style={{display:'flex', flexDirection: 'column', alignItems:'center'}}>
        <img src={logo} style={{ marginTop: '100px',height: '250px'}}/>
        <button onClick={update} style={{width:'300px', padding: '20px 0', fontSize:'25px'}}>Get Started</button>
        <p style={{color:"#57b7bd"}}><i>"The future of money is digital currency" - Bill Gates</i></p>
    </div>
)


}




export default Home