import React, { Component } from 'react';
import FavoriteCard from './FavoriteCard'
import axios from 'axios'
import '../components.scss'




class Favorites extends Component {
    constructor(props) {
      super(props);
      this.state = {
       favorites: [1,2,3,4,5,6,7,8]
      };
}


    

    componentDidMount(){
        axios
        .get("https://api.coingecko.com/api/v3/simple/price?ids=01coin%2C02-token%2CbitBTC%2Cdomocoin%2Cether-1%2Cests%2Ceternity%2C4new&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true")
        .then (response => {
           
            // this.setState(() => ({ favorites: [response.data] }));
            console.log('state', this.state.favorites[0])
            
          })
        .catch(err => {
            console.log(err);
        })
    
    }
    
  
    render() {
      return (
        <div >

          <div>
                
          {this.state.favorites.map(fav => { 
            return (                
              <FavoriteCard 
              price = {fav.usd}/>
            
            );
          })}
                
            </div>
            </div>
        
      );
    }
  }
  
  export default Favorites;