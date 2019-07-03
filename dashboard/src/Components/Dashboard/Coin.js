import React from 'react'
// import { Dropdown, DropdownToggle, DropdownMenu, DropDownItem } from 'react-bootstrap';


export default class Coin extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            coin: this.props.coin
        }
    }



    render() {
        return (
            <>
                <div onClick={() => this.props.display(this.props.coin)}>{this.state.coin.name}</div>
            </>
        )
    }
}

