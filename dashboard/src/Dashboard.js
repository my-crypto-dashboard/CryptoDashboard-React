import React from 'react';
import axios from 'axios';
import './Dashboard.scss';


class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            coins: []
        }

    }


    componentDidMount() {
        axios.get('https://api.coingecko.com/api/v3/coins/list')
            .then(res => {
                this.setState({ coins: res.data })
            })
            .catch(err => console.log(err))
    }

    showCrypto = coin => {
        // console.log(coin.id);
        axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coin.id}&vs_currencies=usd`)
            .then(res => {
                console.log(res.data);
                this.setState({ crypto: res.data })
            })
            .catch(err => console.log(err));
    }

    cryptoSearch(crypto) {
        console.log('cryptosearch triggered');

        const foundCrypto = this.state.coins.filter(coin => coin.symbol === crypto.value);
        this.setState({ foundCrypto: foundCrypto })
        if (foundCrypto.length === 0) {
            console.log('no crypto ticker found with symbol: ', crypto);
        } else {
            this.showCrypto(foundCrypto[0]);
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

                {this.state.crypto && (<div>
                    <div>{Object.keys(this.state.crypto)[0]}</div>
                    <div>{Object.values(this.state.crypto)[0]['usd']}</div>
                </div>)}
                {this.state.coins.map((coin, i) => <div key={i} className="coin" onClick={() => this.props.showCrypto(coin)}>{coin.symbol}</div>)}
            </div>
        )
    }
}

export default Dashboard;
