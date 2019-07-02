import React, { Component } from 'react';
import Chart from '../Charts/CardCharts';




class Wallets extends Component {
    constructor(props) {
      super(props);
      this.state = {
       
      };
    }
  
    render() {
      return (
        <div className={'chart'} >
          <Chart/>
          <h1>Wallets Component</h1>
        </div>
      );
    }
  }
  
  export default Wallets;