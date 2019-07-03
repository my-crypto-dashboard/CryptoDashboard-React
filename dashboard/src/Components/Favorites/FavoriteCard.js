import React, { Component } from 'react'
import Chart from '../Charts/CardCharts'
import millify from 'millify'
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

      <p className={'header1'}>{this.props.name.toUpperCase()}</p>
      <div style={{width:'50%', textAlign:'left', marginLeft:'45%'}}>
      <span style={{color:'#57b7bd'}}>24hr. Change:</span> <span style={{ }}>{Math.round(this.props.change*100)/100} %</span>  
      <p></p>
      <span style={{color:'#57b7bd'}}>Current Price:</span>  <span> ${this.props.price}</span>
      <p></p>
      <span style={{color:'#57b7bd'}}>Market Cap:</span>  <span> {millify(Math.round(this.props.mCap))}</span>
      </div>
      <div className = {`chart${this.props.name}`} style={{paddingRight: '50px', width: '100%'}}><Chart name={this.props.name} time={this.state.time}/></div>
     
    </div>
      );

      }

      
   
};


export default FavoriteCard;