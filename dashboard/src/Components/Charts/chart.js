import React, {useEffect, useState} from 'react';
import * as d3 from 'd3';
import axios from 'axios';


const Chart = props => {

  useEffect(() => {
    axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${364}`)
    .then(res => {
        let priceData = res.data.prices;
        let marketCapData = res.data.market_caps;
        let volumeData = res.data.total_volumes;
        let svgHeight = 400;
        let svgWidth = 800;
        let margin = {top: 20, right: 20, bottom: 30, left: 150}
        let width = svgWidth - margin.left - margin.right;
        let height = svgHeight - margin.top - margin.bottom;

        let svg = d3.select('body').append('svg')
            .attr('width', svgWidth)
            .attr('height', svgHeight);

        let g = svg.append('g').attr('transform', `translate(${margin.left}, ${margin.top})`);


        // Date/Price data for prices
        let minDate = priceData[0][0];
        let maxDate = priceData[priceData.length -1][0];
        let minPrice = d3.min(priceData, function(d) { return d[1]});
        let maxPrice = d3.max(priceData, function(d) { return d[1]});
        let diffPrice = ((maxPrice - minPrice) / 2);

        let minMC = d3.min(marketCapData, function(d) { return d[1]});
        let maxMC = d3.max(marketCapData, function(d) { return d[1]});
        let changeMC = (maxMC % 4)
        
        let y = d3.scaleLinear().rangeRound([height, 0])
        let x = d3.scaleTime().rangeRound([0, width]);
        
        let y2 = d3.scaleLinear().rangeRound([height, 0]);
        console.log(minPrice -diffPrice);
        console.log(maxPrice + maxPrice);

        let line = d3.line().x(function(d) {return x(d[0])}).y(function(d) { return y(d[1])})
                            x.domain([minDate, maxDate]).tickFormat(d3.timeFormat("%d%m"));
                            y.domain([minPrice, maxPrice]);

        let marketCapLine = d3.line().x(function(d) {return x(d[0])}).y(function(d) {return y2(d[1])})
                            y2.domain([minMC - changeMC, maxMC + changeMC])


        g.append('g')
            .attr('transform', `translate(0, ${height})`)
            .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%d. %b")))
            .select('.domain')
            .remove();

        g.append('g')
            .call(d3.axisLeft(y2).ticks(4))
            .append('text')
            .attr('fill', '#000')
            .attr('transform', 'rotate(-90)')   
            .attr('dy', '0.71em')
            .attr('text-anchor', 'end')
            .text('Martket Cap');

        g.append('g')
            .attr('transform', `translate(${width}, 0)`)
            .call(d3.axisRight(y).ticks(4))
            .append('text')
            .attr('fill', '#000')
            .attr('transform', 'rotate(-90')
            .attr('dy', '0.71em')
            .attr('text-anchor', 'end')
            .text('Price ($)');

        g.append('path')
        .datum(priceData)
        .attr('fill', 'none')
        .attr('stroke', 'green')
        .attr('stroke-linjoin', 'round')
        .attr('stroke-linecap', 'round')
        .attr('stroke-width', 1.5)
        .attr('d', line);

        g.append('path')
        .datum(marketCapData)
        .attr('fill', 'none')
        .attr('stroke', 'blue')
        .attr('stroke-linjoin', 'round')
        .attr('stroke-linecap', 'round')
        .attr('stroke-width', 1.5)
        .attr('d', marketCapLine);

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