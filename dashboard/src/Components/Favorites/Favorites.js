import React, { Component } from 'react';




class Favorites extends Component {
    constructor(props) {
      super(props);
      this.state = {
       favorites: {}
      };
    }
  
    render() {
      return (
        <div >
          <h1>Favorites Component</h1>
        </div>
      );
    }
  }
  
  export default Favorites;