import React, { Component } from 'react';
import FavoriteCard from './FavoriteCard'
import axios from 'axios'
import '../components.scss'


class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      temp2: null
    };
  }

  async componentDidMount() {
    let temp = [];
    this.props.favorites.forEach(pair => {
      temp.push(pair[1]);
      temp.push(pair[2]);
    });
    let temp2 = [];
    await axios
      .get(`https://api.coingecko.com/api/v3/simple/price?ids=${temp}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`)
      .then(response => {
        for (let i = 0; i < temp.length; i += 2) {

          temp2.push([response.data[temp[i]], response.data[temp[i + 1]]]);
        }

        if (temp2.length > 0) {
          this.setState({ temp2 })
        }

      })

      .catch(err => {
        console.log(err);
      })
  }

  render() {
    // console.log(this.state.temp2)
    console.log('%cthis.props.favorites: ', 'color:red;font-size:16px;', this.props.favorites);
    return (
      <div className='favorites'>
        <div>
          {
            this.props.favorites.map((favorite, index) => {
              let currPrice = (this.state.temp2 != null ? (this.state.temp2[index][0].usd / this.state.temp2[index][1].usd) : 0);
              let currChange = (this.state.temp2 != null ?
                (
                  (this.state.temp2[index][0].usd * (1 + this.state.temp2[index][0].usd_24h_change))
                  /
                  (this.state.temp2[index][1].usd * (1 + this.state.temp2[index][1].usd_24h_change))
                  / currPrice)
                :
                0
              )

              return (
                <FavoriteCard
                  displayName={`${favorite[1]} / ${favorite[2]}`}
                  name={`${favorite[1]}${favorite[2]}`}
                  price={currPrice}
                  change={currChange}
                  pairs={favorite}
                  remove={this.props.remove}
                  favorite={favorite}
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