import React, {useEffect, useState} from 'react';
import * as d3 from 'd3';
import axios from 'axios';


const Chart = props => {
  

  useEffect(() => {
    async function setup() {
      let firstPairData = await axios.get(`https://api.coingecko.com/api/v3/coins/${props.pairs[1]}//market_chart?vs_currency=usd&days=30`)
      .then(res => {
        return res.data.prices;
      })
      .catch(err => console.log(err));
      console.log("PAIRS", firstPairData)

      let secondPairData = await axios.get(`https://api.coingecko.com/api/v3/coins/${props.pairs[2]}//market_chart?vs_currency=usd&days=30`)
      .then(res => {
        return res.data.prices;
      })
      .catch(err => {
          console.log(err);
      })

      const parseData = () => {
        let cap = Math.min(firstPairData.length, secondPairData.length);
        if(firstPairData.length > secondPairData.length) {
          return firstPairData.map((val, i) => {
            if(i < cap) {
              return [val[0], val[1]/secondPairData[i][1]];
            } else {
              return [val[0], val[1]/secondPairData[cap -1][1]];
            }
            
          })
        } else {
          return secondPairData.map((val, i) => {
            if(i < cap) {
              return [val[0], val[1]/firstPairData[i][1]];
            } else {
              return [val[0], val[1]/firstPairData[cap -1][1]];
            }
            
          })
        }
      }
      
      let data = parseData();


        let svgHeight = 400;
        let svgWidth = 800;
        let margin = {top: 20, right: 20, bottom: 30, left: 150}
        let width = svgWidth - margin.left - margin.right;
        let height = svgHeight - margin.top - margin.bottom;

        let svg = d3.select(`.chart${props.name}`).append('svg')
            .attr('width', '1000px')
            .attr('height', svgHeight);

        let g = svg.append('g').attr('transform', `translate(${margin.left}, ${margin.top})`);

        // Date/Price data for prices
        let minDate = data[0][0];
        let maxDate = data[data.length -1][0];
        let minPrice = d3.min(data, function(d) { 
            return d[1]         
        });
        let maxPrice = d3.max(data, function(d) { 
          return d[1]
        });
        
        let y = d3.scaleLinear().rangeRound([height, 0]);
        let x = d3.scaleTime().rangeRound([0, width]);  

        let line = d3.line().x(function(d) {return x(d[0])}).y(function(d) { return y(d[1])})
                            x.domain([minDate, maxDate])
                            y.domain([minPrice, maxPrice]);

        g.append('g')
            .attr('transform', `translate(0, ${height})`)
            .call(d3.axisBottom(x))
            .select('.domain')
            .remove();


        g.append('g')
            .attr('transform', `translate(${width}, 0)`)
            .call(d3.axisRight(y))
            .append('text')
            .attr('fill', '#000')
            
            .attr('y', 6)
            .attr('dy', '0.71em')
            .attr('text-anchor', 'end')
            

        g.append('path')
        .datum(data)
        .attr('fill', 'none')
        .attr('stroke', '#6049e6')
        .attr('stroke-linjoin', 'round')
        .attr('stroke-linecap', 'round')
        .attr('stroke-width', 1.5)
        .attr('d', line);
        
    }

    setup();
    
  }, []);

  return (
    <div className='chartWrapper'>  
     
    </div>
  );
};


export default Chart;