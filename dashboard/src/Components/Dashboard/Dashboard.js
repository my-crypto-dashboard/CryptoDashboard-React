
import React from 'react';
import axios from 'axios';
import './Dashboard.scss';
// import Slide from 'react-reveal/Slide';
import Coin from './Coin';
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
// import ControlledCarousel from './Carousel';
// import Spin from './Spin';
// import Wheel from './Wheel';
// console.log(Wheel);

class Dashboard extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            coins: [],
            cryptoPair: null,
            favorite: false,
            dropdownOpen: false
        }
        this.baseState = this.state;
    }

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    componentDidMount() {
        axios.get('https://api.coingecko.com/api/v3/coins/list')
            .then(res => {
                this.setState({ coins: res.data })
            })
            .catch(err => console.log(err))
    }

    componentWillUnmount() {
        this.setState(this.baseState);
    }

    displayCryptoLeft = coin => {
        console.log('displayCryptoLeft triggered');
        this.setState({ leftcoin: null });  //why does setting state not work here, but it works inside the axios call?

        if (coin) {

            axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coin.id}&vs_currencies=usd`)
                .then(res => {
                    this.setState({
                        leftcoinUSD: res.data,
                        leftcoin: coin
                    })
                })
                .catch(err => console.log(err));
        }


        // if (this.state.rightcoin && this.state.leftcoin) {
        // }

        if (this.state.rightcoin) {
            this.showCryptoPair(coin, this.state.rightcoin);
        }

    }

    displayCryptoRight = (coin) => {
        console.log('displayCryptoRight triggered');
        console.log('right coin', coin);
        this.setState({ rightcoin: null });
        console.log(this.state);

        axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${coin.id}&vs_currencies=usd`)
            .then(res => {
                this.setState({ rightcoinUSD: res.data, rightcoin: coin })
            })
            .catch(err => console.log(err));

        // if (this.state.leftcoin && this.state.rightcoin) {
        //     this.showCryptoPair(coin, this.state.leftcoin);
        // }

        console.log('leftcoin and rightcoin in displayCryptoRight', this.state.leftcoin, coin);

        if (this.state.leftcoin) {
            this.showCryptoPair(this.state.leftcoin, coin);
        }


    }

    cryptoSearch(crypto, form) {
        console.log('cryptosearch triggered');

        const forms = document.querySelectorAll('form');
        let rightCoinInput = forms[1].children[0].value;
        let leftCoinInput = forms[0].children[0].value;

        const leftCoinFound = this.state.coins.filter(coin => coin.symbol === leftCoinInput)[0];
        const rightCoinFound = this.state.coins.filter(coin => coin.symbol === rightCoinInput)[0];

        console.log('leftCoinFound', leftCoinFound);
        console.log('rightCoinFound', rightCoinFound);

        if (leftCoinFound) {
            this.setState({ leftcoin: leftCoinFound })
            this.displayCryptoLeft(leftCoinFound);
        }

        if (rightCoinFound) {
            this.setState({ rightcoin: rightCoinFound })
            this.displayCryptoRight(rightCoinFound);
        }

        // if (leftCoinFound && rightCoinFound) {
        //     this.showCryptoPair(leftCoinFound, rightCoinFound);
        // }

        if (leftCoinFound && rightCoinFound) {
            this.showCryptoPair(leftCoinFound, rightCoinFound);
        }
    }


    showCryptoPair = (leftcoin, rightcoin) => {
        console.log('showcryptopair fired', leftcoin, rightcoin);

        axios.get(`https://api.coingecko.com/api/v3/simple/price?ids=${leftcoin.id}&vs_currencies=${rightcoin.symbol}`)
            .then(res => {
                console.log('axios response data for cryptoPair', res.data);
                this.setState({ cryptoPair: res.data });

            })
            .catch(err => console.log(err));
    }

    favoriteToggle = () => {
        console.log('favoriteToggle triggered');
        this.setState(state => ({ favorite: !state.favorite }))
    }

    render() {
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
                        <input name="cryptoTicker" placeholder="Crypto" />
                    </form>

                    {(this.state.leftcoin && this.state.rightcoin && this.state.cryptoPair) && (
                        <div className="middleData">
                            <div>
                                <div>{this.state.leftcoin.symbol} / {this.state.rightcoin.symbol}</div>
                                <div> {this.state.cryptoPair[this.state.leftcoin.id][this.state.rightcoin.symbol]}</div>
                            </div>

                            <button onClick={() => this.favoriteToggle()}>Add to Favorites</button>
                        </div>
                    )}

                    <form name='right-form' onSubmit={(e) => {
                        e.preventDefault();
                        this.cryptoSearch(e.target[0], e.target);
                    }}>
                        <input name="cryptoTicker" placeholder="Crypto" />
                    </form>
                </div>

                <main>
                    <div className="data">
                        {this.state.leftcoinUSD && (
                            <div className="leftData">
                                <div>{Object.keys(this.state.leftcoinUSD)[0]}</div>
                                {/* <div>{this.state.leftcoin.symbol}</div> */}
                                <div>${Object.values(this.state.leftcoinUSD)[0]['usd']} usd</div>
                                <div>  </div>
                            </div>)}



                        {/* <div>{this.state.cryptoPair[this.state.leftcoin.id][this.state.rightcoin.symbol]}</div> */}

                        {this.state.rightcoinUSD && (
                            <div className="rightData">
                                <div>{Object.keys(this.state.rightcoinUSD)[0]}</div>
                                {/* <div>{this.state.rightcoin.symbol}</div> */}
                                <div>${Object.values(this.state.rightcoinUSD)[0]['usd']} usd</div>
                            </div>)}
                    </div>
                    <div className='coins'>
                        <div className='leftCoins dropdown'>
                            {/* {this.state.coins.map((coin, i) => <Slide left><div key={i} className="left-coin" onClick={() => this.displayCryptoLeft(coin)}>{coin.symbol}</div></Slide>)} */}
                            <button className="dropbtn">Crypto Tokens</button>

                            <div className="dropdown-content">
                                {this.state.coins.map((coin, i) => <Coin key={i} className="left-coin" coin={coin} display={this.displayCryptoLeft} />)}
                            </div>

                            {/* {this.state.coins.map((coin, i) => <Carousel key={i} cryptos={this.state.coins} />)} */}
                            {/* <ControlledCarousel cryptos={this.state.coins} /> */}
                            {/* <Coin coins={this.state.coins} display={this.displayCryptoLeft} /> */}
                        </div>
                        <div className='rightCoins dropdown'>

                            <button className="dropbtn">Crypto Tokens</button>
                            <div className="dropdown-content">
                                {this.state.coins.map((coin, i) => <Coin key={i} className="right-coin" coin={coin} display={this.displayCryptoRight} />)}
                            </div>
                            {/* {this.state.coins.map((coin, i) => <div key={i} className="right-coin" onClick={() => this.displayCryptoRight(coin)}>{coin.symbol}</div>)} */}
                            {/* <Coin coins={this.state.coins} display={this.displayCryptoRight} /> */}
                        </div>
                    </div>
                </main>
            </>
        )
    }
}

export default Dashboard;