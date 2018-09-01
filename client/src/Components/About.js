import React, { Component } from 'react';
import { Image, Button } from "react-bootstrap";
import './PrivacyPolicy.css';
import InfoBackground from './InfoBackground';
import abouthead from './Assets/AffiaMmutaWhite.png';
import rocket from './Assets/Rocket.png';
import map from './Assets/Map.png';
import { Link } from 'react-router-dom';

 export default class About extends Component {
  render() {
    return (
      <div>
        <InfoBackground>
            <Image src={abouthead} alt=""/>
            <p>We are commited to increasing Igbo literacy <br/>in African diaspora using technology</p>
        </InfoBackground>
        <div className="mission-container">
          <div>
            <Image src={rocket} alt="rocket"/>
          </div>
          <div>
            <h2>Our Mission</h2>
            <p>AffiaMmuta is an edutech startup committed to massively increasing
               Igbo literacy in African diaspora using technology. We are a group of 
               people using innovative technology to help children learn Igbo language
                with books .and videos.</p>
          </div>
        </div>
        <div className="our-team-container">
          <h2>Our Team</h2>
          <div className="profiles">
            <div>
              <div className="profile-image-container"></div>
              <div className="profile-description-container">
                <p>Ositadinma Nwangwu</p>
                <h5>FOUNDER & CEO</h5>
              </div>
            </div>
            <div>
              <div className="profile-image-container"></div>
              <div className="profile-description-container">
                <p>Ositadinma Nwangwu</p>
                <h5>FOUNDER & CEO</h5>
              </div>
            </div>
            <div>
              <div className="profile-image-container"></div>
              <div className="profile-description-container">
                <p>Ositadinma Nwangwu</p>
                <h5>FOUNDER & CEO</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="location">
          <div className="location-position">
            <div>
              <Link to="https://www.google.com/maps/place/Enugu+Lifestyle+%26+Golf+City+Administrative+Building/@6.3909948,7.5315624,17z/data=!3m1!4b1!4m5!3m4!1s0x1044a728c3b30bbd:0x3bb41dc04492c6d0!8m2!3d6.3909895!4d7.5337511?shorturl=1">
                <Image src={map} alt="rocket"/>
              </Link>
            </div>
            <div>
              <h2>Our Office</h2>
              <p>Enugu Lifestyle and Goif City (Centenary City) Kilometer 7, Enugu/Port Harcourt Expressway Enugu, Nigeria</p>
            </div>
          </div>
        </div>
        <div className="get-in-touch">
          <h2>Like what we're doing?</h2>
          <Button>Get in touch!</Button>
        </div>
      </div>
    );
  }
}