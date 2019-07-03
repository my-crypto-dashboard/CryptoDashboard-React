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
        console.log(ids)
        axios
        .get(`https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`)
        .then (response => {
          console.log('response', response.data)
         let value =  Object.entries(response.data).map(([key, value]) => {
         const newValue = Object.assign({name:key}, value)
         
           console.log(newValue)
          
            return {newValue}  
          })
            this.setState({
                favorites: value});
                console.log('state', this.state)
          })
        .catch(err => {
            console.log(err);
        })
    
    }
    
  
    render() {
      return (
        <div>

          <div>
          {this.state.favorites.map(favorite => {   
            return (
              <FavoriteCard 
              name=   {favorite.newValue.name}
              price = {favorite.newValue.usd}
              mCap =  {favorite.newValue.usd_market_cap}
              change ={favorite.newValue.usd_24h_change}
              >
              </FavoriteCard>
            )             
              
          })};
            
       
                
            </div>
            </div>
        
      );
    }
  }
  
  export default Favorites;