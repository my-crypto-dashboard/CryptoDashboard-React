import React, { Component } from 'react';
import axios from 'axios'
import '../components.scss'




class FavoriteCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
    componentDidMount(){
      let ids = this.state.ids
      console.log(ids)
      axios
      .get(`https://api.coingecko.com/api/v3/coins/${this.props.name}/market_chart?vs_currency=usd&days=7`)
      .then (response => {
        console.log('response in card', this.props.name, response.data.prices)
        })
      .catch(err => {
          console.log(err);
      })
  };

    
    render (){
      return(
      <div className={'card-1'}>  
      <p className={'header'}>{this.props.name.toUpperCase()}</p>
      <p>24hr. Change:   {this.props.change}</p>
      <p></p>
      <p>Current Price:   ${this.props.price}</p>
      <p>Market Cap:   {this.props.mCap}</p>
    </div>
      );

      }

      
   
};


export default FavoriteCard;