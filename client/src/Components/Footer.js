import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Jumbotron, Image } from "react-bootstrap";
import lfooter from './Assets/AffiaMmutaWhite.png';
import lfooter2 from './Assets/FooterIcon.png';
import fbIcon from './Assets/TwitterLogo.png';
import tIcon from './Assets/FbWhiteLogo.png';
import './Footer.css';


 class Footer extends Component {
  render() {
    return (
        <Jumbotron className="footer">
            <div className="footer-top-contents">
                <div>
                    <Image src={lfooter} alt='Logo' className="footer-logo" />
                </div>
                <div className="about-footer">
                    <h5 >ABOUT AFFIAMMUTA</h5>
                    <p>We are commited to massively <br /> increasing Igbo literacy in African diaspora using technology. Learn more</p>
                </div>
                <div  className="contact-footer">
                    <h5 className="contact-head">CONTACT</h5>
                    <Link to="#">Contact@affiammuta.com</Link>
                    <p className="contact-no">+23490260717</p>
                </div>
                <div className="nav-footer">
                    <h5>NAVIGATION</h5>
                    <Link to="#">Terms of use</Link><br />
                    <Link to="#" className="contact-no">Privacy policy</Link>
                </div>
                <div>
                    <Image src={lfooter2} alt='Logo' className="footer-icon" />
                </div>
            </div>
            <div className="footer-bottom-contents">
                <div className="footer-bottom-copy">
                    <p>&copy; 2018 AFFIAMMUTA. All Rights Reserved</p>
                </div>
                <div className="fb-twitter">
                    <Image src={fbIcon} alt='Logo' className="footer-icon" />
                    <Image src={tIcon} alt='Logo' className="footer-icon" />
                </div>
            </div>
        </Jumbotron>   
    );
  }
}
export default Footer;