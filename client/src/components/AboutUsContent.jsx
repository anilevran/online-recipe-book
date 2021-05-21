import React, { Component } from "react";
import resim from "../img/AnılFoto.jpg";
import resim2 from "../img/ToykanFoto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import "../css/aboutusContent.css";



class AboutUsContent extends Component {
    state = {};
    render() {
        return (
            <div className="axd-container">
                <div class="about-section">
            
  <h1>About Us Page</h1>
  <p>Some text about who we are and what we do.</p>
  <p>Resize the browser window to see that this page is responsive by the way.</p>
</div>

<h2>Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card-1">
    <img src={resim} alt="pp"></img>
      <div className="container">
        <h2>Anıl Evran</h2>
        <p className="title">Backend Developer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>anil.evran@gmail.com</p>
        <p><button className="button">Contact</button></p>
      </div>
  </div>
  </div>
  
  
  <div className="column">
    <div className="card-1">
    <img src={resim2} alt="pp"></img>
      <div className="container">
        <h2>Toykan Abuhanoğlu</h2>
        <p className="title">Frontend Developer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>toykana@gmail.com</p>
        <p><button className="button">Contact</button></p>
      </div>
      </div>
      </div>
      </div>
      </div>


        );
    }
}

export default AboutUsContent