import React from 'react';
import Carousel from 'react-bootstrap/Carousel';



class ControlledCarousel extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null,
            cryptos: this.props.cryptos
        };
    }


    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction,
        });
    }

    render() {
        // console.log(this.props.cryptos);
        const { index, direction } = this.state;

        return (
            <Carousel activeIndex={index} direction={direction} onSelect={this.handleSelect} controls="true">
                {this.props.cryptos.map(crypto => <Carousel.Caption>{crypto.id}</Carousel.Caption>)}
            </Carousel>
        );
    }
}


export default ControlledCarousel;


