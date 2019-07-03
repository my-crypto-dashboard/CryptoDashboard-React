import React, {Component} from 'react';
import '../About/About.scss'
import Grid from '@material-ui/core/Grid';
import iconLinkedin from '../Assets/iconLinkedin.svg'
import iconGithub from '../Assets/iconGithub.svg'




class About extends Component {
  
    constructor(props) {
      super(props);
      this.state = {
       
      };
    }
  
    
    render() {
      return (
        <container>
        <Grid className= "header">
<h3>what cryptdash is all about</h3>
<p class=" text-center w-responsive">Cryptdash provides real-time updates for all the market prices. 
The market prices can be paired off with your choice and make a list of prices according to your favorite cryptocurrency and exchanges to uphold the quality to the users. 
<br/><br/>Cryptdash allows you to add multiple wallets and view current assets that the user is holding. 
<br/>*(future security issue to solve for integrating wallets)</p>
       </Grid>

    <div className="team-section">
       <section className="section-header">
       <div className="header-box">
         <h4 style={{textAlign:'left'}}>our engineering team</h4>
         <div className="separator"></div>
        </div>
       </section>

       <section className="image-section">
          <div className="image-container">

            <div className="image-box">
              <img className="avatar" src="https://avatars1.githubusercontent.com/u/47340734?s=460&v=4" alt="" style={{width: "200px"}}/>
              <p>Brandon Allison</p>
              <img className="icon-in" href="https://www.linkedin.com/in/brandon-allison-129987124/" src={iconLinkedin} style={{width: "24px"}} />
              <img className="icon-gh" href="https://github.com/orgs/my-crypto-dashboard/people/BrandonJAllison" src={iconGithub} style={{width: "24px"}} />
            </div>
            

            <div className="image-box">
              <img className="avatar" src="https://avatars1.githubusercontent.com/u/35277732?s=460&v=4" alt="" style={{width: "200px"}}/>
              <p>Bryan Garcia-Felix</p>
              <img className="icon-in" href="https://www.linkedin.com/in/bryan-garciafelix/" src={iconLinkedin} style={{width: "24px"}} />
              <img className="icon-gh" href="https://github.com/Bryan-GF" src={iconGithub} style={{width: "24px"}} />
            </div>

            <div className="image-box">
              <img className="avatar" src="https://media.licdn.com/dms/image/C5603AQEQrRdEV93fLg/profile-displayphoto-shrink_200_200/0?e=1567641600&v=beta&t=v4kNXBQ9VdE6rHQKinuYDVoH6taTCYGt3PwC60EK5yU" alt="" style={{width: "200px"}}/>
              <p>Itel Domingo</p>
              <img className="icon-in" href="https://www.linkedin.com/in/iteldomingo" src={iconLinkedin} style={{width: "24px"}} />
              <img className="icon-gh" href="https://github.com/iteldomingo" src={iconGithub} style={{width: "24px"}} />
            </div>

            <div className="image-box">
              <img className="avatar" src="https://avatars0.githubusercontent.com/u/30554629?s=460&v=4" alt=""style={{width: "200px"}}/>
              <p>Amir Yunas</p>
              <img className="icon-in" href="#"  src={iconLinkedin} style={{width: "24px"}} />
              <img className="icon-gh" href="https://github.com/ayunas" src={iconGithub} style={{width: "24px"}} />
            </div>

          </div>
       </section>
       </div>

</container>


      
      
      );
    }
  }
  
  export default About;