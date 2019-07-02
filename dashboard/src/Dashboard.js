import React from 'react';
import axios from 'axios';
import './Dashboard.scss';
// import Spin from './Spin';
// import Wheel from './Wheel';
// console.log(Wheel);

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

    showCryptoPair = (leftcoin, rightcoin) => {
        console.log('showcryptopair fired', leftcoin, rightcoin);
        // let leftcoinID = Object.keys(this.state.cryptoLeft)[0];

        // const leftcoinID = this.state.coins.filter(coin => coin.symbol === leftcoin)[0].id;
        // console.log('showcryptopair leftcoinid', leftcoinID);
        // this.setState({ leftcoinID });


        axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${this.state.leftcoin.id}&vs_currencies=${rightcoin}`)
            .then(res => {
                console.log(res.data);
                this.setState({ cryptoPair: res.data })
            })
            .catch(err => console.log(err));
    }

    displayCryptoLeft = coin => {
        console.log('left coin', coin);
        this.setState({ leftcoin: coin });
        // this.setState({ cryptoResult1: coin });

        // if (this.state.cryptoRight) {  //if the right coin exists, call the crypto pair function, and pass in the symbol of both coins)
        //     const leftcoin = this.state.coins.filter(leftCoin => leftCoin.id === coin.id)[0].symbol;
        //     const rightcoin = this.state.coins.filter(rightCoin => rightCoin.id === Object.keys(this.state.cryptoRight)[0])[0].symbol;
        //     console.log('right coin', rightcoin);
        //     console.log('leftcoin', leftcoin);
        //     // this.setState({ cryptoResult1: coin });
        //     this.showCryptoPair(leftcoin, rightcoin);
        // }

        axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coin.id}&vs_currencies=usd`)
            .then(res => {
                console.log(res.data);
                this.setState({ leftcoinUSD: res.data })
            })
            .catch(err => console.log(err));

        if (this.state.rightcoin) {

            this.showCryptoPair(coin.symbol, this.state.rightcoin.symbol);
        }
    }

    displayCryptoRight = coin => {
        console.log('right coin', coin);
        this.setState({ rightcoin: coin });
        // this.setState(state => ({ cryptoResult2: coin }));

        axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coin.id}&vs_currencies=usd`)
            .then(res => {
                console.log(res.data);
                this.setState({ rightcoinUSD: res.data })
            })
            .catch(err => console.log(err));
    }

    cryptoSearch(crypto, form) {
        console.log('cryptosearch triggered');

        const forms = document.querySelectorAll('form');
        let rightcoin = forms[1].children[0].value;
        let leftcoin = forms[0].children[0].value;

        if (leftcoin && rightcoin) {
            this.showCryptoPair(leftcoin, rightcoin);
        }
        // forms.forEach( form => form.)
        if (form.name === 'left-form') {
            const leftcoin = this.state.coins.filter(coin => coin.symbol === crypto.value)[0];

            this.setState({ leftcoin });
            if (!leftcoin) {
                alert('no crypto ticker found with that symbol. ')
            } else {
                this.displayCryptoLeft(leftcoin);
            }
        } else if (form.name === 'right-form') {
            const rightcoin = this.state.coins.filter(coin => coin.symbol === crypto.value)[0];
            this.setState({ rightcoin });
            if (!rightcoin) {
                alert('no crypto ticker found with that symbol. ', crypto.value);
            } else {
                this.displayCryptoRight(rightcoin);
            }
        }
    }

    render() {
        console.log('this.rightcoin', this.state.rightcoin);
        console.log('this.leftcoin', this.state.leftcoin);
        console.log('this.cryptoPair', this.state.cryptoPair);

        return (
            <>
                {/* <Wheel /> */}
                {/* <canvas id='myCanvas' width='880' height='300'>
                    {Wheel}
                </canvas> */}

                {/* <div>{Spin}</div> */}
                {/* <Spin /> */}
                <div className='forms'>
                    <form name='left-form' onSubmit={(e) => {
                        e.preventDefault();
                        this.cryptoSearch(e.target[0], e.target);
                    }}>
                        <input name="cryptoTicker" placeholder="Crypto Ticker Symbol" />
                    </form>

                    <form name='right-form' onSubmit={(e) => {
                        e.preventDefault();
                        this.cryptoSearch(e.target[0], e.target);
                    }}>
                        <input name="cryptoTicker" placeholder="Crypto Ticker Symbol" />
                    </form>
                </div>

                <main>
                    <div className="data">
                        {this.state.leftcoinUSD && (<div>
                            <div>{Object.keys(this.state.leftcoinUSD)[0]}</div>
                            <div>${Object.values(this.state.leftcoinUSD)[0]['usd']} usd</div>
                            <div>  </div>
                        </div>)}

                        {(this.state.leftcoin && this.state.rightcoin && this.state.cryptoPair) && (
                            <div>
                                <div>{this.state.leftcoin.symbol} / {this.state.rightcoin.symbol}</div>
                                <div> {this.state.cryptoPair[this.state.leftcoin.id][this.state.rightcoin.symbol]}</div>
                            </div>
                        )}

                        {this.state.rightcoinUSD && (
                            <div>
                                <div>{Object.keys(this.state.rightcoinUSD)[0]}</div>
                                <div>${Object.values(this.state.rightcoinUSD)[0]['usd']} usd</div>
                            </div>)}
                    </div>
                    <div className='coins'>
                        <div className='leftCoins'>
                            {this.state.coins.map((coin, i) => <div key={i} className="left-coin" onClick={() => this.displayCryptoLeft(coin)}>{coin.symbol}</div>)}
                        </div>
                        <div className='rightCoins'>
                            {this.state.coins.map((coin, i) => <div key={i} className="right-coin" onClick={() => this.displayCryptoRight(coin)}>{coin.symbol}</div>)}
                        </div>
                    </div>
                </main>
            </>
        )
    }
}

export default Dashboard;
