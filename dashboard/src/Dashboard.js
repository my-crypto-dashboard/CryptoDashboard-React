import React from 'react';
import axios from 'axios';
import './Dashboard.scss';


class Dashboard extends React.Component {

    state = {
        coins: []
    }

    componentDidMount() {
        axios.get('https://api.coingecko.com/api/v3/coins/list')
            .then(res => {
                this.setState({ coins: res.data })
            })
            .catch(err => console.log(err))
    }

    cryptoSearch(crypto) {
        console.log('cryptoSearch triggered', crypto);
        const foundCrypto = this.state.coins.filter(coin => coin.symbol === crypto.value);
        this.setState({ foundCrypto: foundCrypto })
        if (foundCrypto.length === 0) {
            console.log('no crypto ticker found with symbol: ', crypto);
        } else {
            this.props.showCrypto(crypto);
        }

    }

    render() {
        return (
            <div className='coins'>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    this.cryptoSearch(e.target[0]);
                }}>
                    <input name="cryptoTicker" placeholder="Crypto Ticker Symbol" />
                </form>
                {this.state.foundCrypto && <div>{this.state.foundCrypto[0].name}</div>}
                {this.state.coins.map((coin, i) => <div key={i} className="coin" onClick={() => this.props.showCrypto(coin)}>{coin.symbol}</div>)}
            </div>
        )
    }
}

export default Dashboard;
