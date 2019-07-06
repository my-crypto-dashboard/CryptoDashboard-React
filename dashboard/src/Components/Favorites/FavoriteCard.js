import React, { Component } from 'react'
import Chart from '../Charts/CardCharts'
import millify from 'millify'
import '../components.scss'
import axios from 'axios'




class FavoriteCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price: '',
    };

  }

  render() {

    return (
      <div className={'card-1'}>
        <button onClick={() => this.props.remove(this.props.favorite)}>Remove Favorite</button>
        <p className={'header1'}>{this.props.displayName.toUpperCase()}</p>
        <span style={{ color: '#57b7bd' }}>24hr. Change:</span> <span style={{}}>{Math.round(this.props.change)} %</span>
        <p></p>
        <span style={{ color: '#57b7bd' }}>Current Price:</span>  <span>{this.props.price.toFixed(2)} {this.props.displayName.toUpperCase()}</span>
        <p></p>
        {/*
        <span style={{color:'#57b7bd'}}>Market Cap:</span>  <span> {millify(Math.round(this.props.mCap))}</span>
        */}

        <div className={`chart${this.props.name}`} style={{ paddingRight: '50px', width: '100%' }}><Chart name={this.props.name} pairs={this.props.pairs} /></div>

      </div>
    );

  }
};


export default FavoriteCard;