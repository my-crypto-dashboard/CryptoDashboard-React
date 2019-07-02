import React, {useEffect, useState} from 'react';
import * as d3 from 'd3';
import axios from 'axios';


const Chart = props => {

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${30}`)
    .then(res => {
        let priceData = res.data.prices;
        let HEIGHT = 400;
        let WIDTH = 400;
        console.log(priceData);
        let minDate = priceData[0][0];
        let maxDate = priceData[priceData.length -1][0];
        let maxPrice = d3.max(priceData, function(d) { return d[1]})
        
        let y = d3.scaleLinear().domain([0, maxPrice]).range([HEIGHT, 0]);
        let x = d3.scaleTime().domain([minDate, maxDate]).range([0, WIDTH]);

        let yAxis = d3.axisLeft(y);
        let xAxis = d3.axisBottom(x);
        let svg = d3.select('body').append('svg').attr('height', '100%').attr('width', '100%');
        let charGroup = svg.append('g').attr('transform', 'translate(50, 50)');
        let line = d3.line().x(function(d) {return x(d[0])}).y(function(d) { return y(d[1])})
        charGroup.append('path').attr('d', line(priceData));
        charGroup.append('g').attr('class', 'x axis').call(xAxis);
        charGroup.append('g').attr('class', 'y axis').call(yAxis);
    })
    .catch(err => {
        console.log(err);
    })
  }, []);

  return (
    <div className='chartWrapper'>  
     
    </div>
  );
};


export default Chart;