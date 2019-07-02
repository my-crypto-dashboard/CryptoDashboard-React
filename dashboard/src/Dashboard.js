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
        console.log('cryptoLeft ', this.state.cryptoLeft);
        console.log('cryptoRight ', this.state.cryptoRight);

        let leftcoinID = Object.keys(this.state.cryptoLeft)[0];
        this.setState({ leftcoinID });
        console.log(leftcoinID);

        axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${leftcoinID}&vs_currencies=${rightcoin}`)
            .then(res => {
                console.log(res.data);
                this.setState({ crypto: res.data })
            })
            .catch(err => console.log(err));



    }


    displayCryptoLeft = coin => {
        axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coin.id}&vs_currencies=usd`)
            .then(res => {
                console.log(res.data);
                this.setState({ cryptoLeft: res.data })
            })
            .catch(err => console.log(err));
    }

    displayCryptoRight = coin => {
        axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coin.id}&vs_currencies=usd`)
            .then(res => {
                console.log(res.data);
                this.setState({ cryptoRight: res.data })
            })
            .catch(err => console.log(err));
    }

    cryptoSearch(crypto, form) {
        console.log('cryptosearch triggered');

        const forms = document.querySelectorAll('form');
        let rightcoin = forms[1].children[0].value;
        let leftcoin = forms[0].children[0].value;
        console.dir(forms[0].children[0].value);
        if (leftcoin && rightcoin) {
            this.showCryptoPair(leftcoin, rightcoin);
        }
        // forms.forEach( form => form.)
        if (form.name === 'left-form') {
            const cryptoResult1 = this.state.coins.filter(coin => coin.symbol === crypto.value);
            this.setState({ cryptoResult1 });
            if (cryptoResult1.length === 0) {
                alert('no crypto ticker found with that symbol. ')
            } else {
                this.displayCryptoLeft(cryptoResult1[0])
            }
        } else if (form.name === 'right-form') {
            const cryptoResult2 = this.state.coins.filter(coin => coin.symbol === crypto.value);
            this.setState({ cryptoResult2 })
            if (cryptoResult2.length === 0) {
                alert('no crypto ticker found with that symbol. ', crypto.value);
            } else {
                this.displayCryptoRight(cryptoResult2[0]);
            }
        }
    }

    render() {
        if (this.state.crypto) {
            let coin = Object.keys(this.state.crypto)[0];

            console.log(coin);
        }

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
                        {this.state.cryptoLeft && (<div>
                            <div>{Object.keys(this.state.cryptoLeft)[0]}</div>
                            <div>${Object.values(this.state.cryptoLeft)[0]['usd']} usd</div>
                        </div>)}

                        {this.state.crypto && (
                            < div >
                                <div>{Object.keys(this.state.crypto)[0]}</div>
                                <div>{this.state.cryptoResult1[0].symbol}/{this.state.cryptoResult2[0].symbol}</div>
                                <div>{this.state.crypto[this.state.leftcoinID][this.state.cryptoResult2[0].symbol]}</div>
                            </div>
                        )}

                        {this.state.cryptoRight && (
                            <div>
                                <div>{Object.keys(this.state.cryptoRight)[0]}</div>
                                <div>${Object.values(this.state.cryptoRight)[0]['usd']} usd</div>
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
