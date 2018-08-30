import React, { Component } from 'react';
import { Image } from "react-bootstrap";
import './PrivacyPolicy.css';
import InfoBackground from './InfoBackground';
import abouthead from './Assets/AffiaMmutaWhite.png';

 export default class About extends Component {
  render() {
    return (
      <div>
        <InfoBackground>
            <Image src={abouthead} alt=""/>
            <p>We are commited to increasing Igbo literacy <br/>in African diaspora using technology</p>
        </InfoBackground>
      </div>
    );
  }
}