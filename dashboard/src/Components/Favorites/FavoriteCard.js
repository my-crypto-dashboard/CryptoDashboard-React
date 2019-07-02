import React, { Component } from 'react';
import Chart from '../Charts/CCharts'
import axios from 'axios'
import '../components.scss'





class FavoriteCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }
    

    render (){
      return(
      <div className={'card-1'}>  
      <p className={'header'}>{this.props.name.toUpperCase()}</p>
      <p>24hr. Change:   {this.props.change}</p>
      <p></p>
      <p>Current Price:   ${this.props.price}</p>
      <p>Market Cap:   {this.props.mCap}</p>
      <div className = {`chart${this.props.name}`} style={{paddingRight: '50px', width: '100%'}}><Chart name={this.props.name}/></div>
    </div>
      );

      }

      
   
};


export default FavoriteCard;