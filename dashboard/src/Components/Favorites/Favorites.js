import React, { Component } from 'react';
import FavoriteCard from './FavoriteCard'
import axios from 'axios'
import '../components.scss'




class Favorites extends Component {
    constructor(props) {
      super(props);
      this.state = {
       ids: [props.ids],
       favorites: []
      };
}


   

    componentDidMount(){
        let ids = this.state.ids
        axios
        .get(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`)
        .then (response => {
         let value =  Object.entries(response.data).map(([key, value]) => {
            return value
          })
            this.setState({
                favorites: value});
                console.log('state', value)
          })
        .catch(err => {
            console.log(err);
        })
    
    }
    
  
    render() {
      return (
        <div >

          <div>
          {this.state.favorites.map(favorite => {   
            return (
              <FavoriteCard 
              key = {favorite.index}
              price = {favorite.usd}
              mCap = {favorite.usd_market_cap}
              change = {favorite.usd_24h_change}
              />
            )             
              
          })};
            
       
                
            </div>
            </div>
        
      );
    }
  }
  
  export default Favorites;