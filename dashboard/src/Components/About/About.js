import React, {Component} from 'react';
import '../About/About.scss'
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


class About extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
       
      };
    }
  
    
    render() {
      return (
        <container>
        <Grid className= "header" >
<h3>what cryptdash is all about</h3>
<p class=" text-center w-responsive">Cryptdash provides real-time updates for all the market prices. 
The market prices can be paired off with your choice and make a list of prices according to your favorite cryptocurrency and exchanges to uphold the quality to the users. 
<br/><br/>Cryptdash allows you to add multiple wallets and view current assets that the user is holding. 
<br/>*(future security issue to solve for integrating wallets)</p>
       </Grid>

       <section className="section-header">
       <div className="header-box">
         <h4>our engineering team</h4>
         <div className="separator"></div>
        </div>
       </section>


</container>
      
      
      );
    }
  }
  
  export default About;