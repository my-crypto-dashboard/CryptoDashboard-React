import React, { Component } from 'react';
import FavoriteCard from './FavoriteCard'
import axios from 'axios'
import '../components.scss'


class Favorites extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favoritesObj: []
    };
  }

  async componentDidMount() {
    let newTemp = []
    this.props.favorites.forEach(item => {
      newTemp.push(item[1])
      newTemp.push(item[2])
    });
    await axios
      .get(`https://api.coingecko.com/api/v3/simple/price?ids=${newTemp}&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true`)
      .then(response => {
        let value = Object.entries(response.data).map(([key, value]) => {
          const newValue = Object.assign({ name: key }, value)
          return newValue;
        })
        this.setState({
          favoritesObj: value
        });
      })
      .catch(err => {
        console.log(err);
      })

  }


  render() {

    console.log(this.state.favoritesObj)
    return (
      <div class={'favorites'}>
        <div>
          {
            this.props.favorites.map((favorite, index) => {

              return (
                <FavoriteCard
                  displayName={`${favorite[1]} / ${favorite[2]}`}
                  name={`${favorite[1]}${favorite[2]}`}
                  /*
                  change ={favorite.newValue.usd_24h_change}
                  */
                  pairs={favorite}

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