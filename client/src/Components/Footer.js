import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Jumbotron, Col, Row, Grid, Image } from "react-bootstrap";
import lfooter from './Assets/AffiaMmutaWhite.png';
import lfooter2 from './Assets/FooterIcon.png';
import fbIcon from './Assets/TwitterLogo.png';
import tIcon from './Assets/FbWhiteLogo.png';
import './Footer.css';


 class Footer extends Component {
  render() {
    return (
        <Jumbotron className="footer">
            <Grid className="footer-grid">
                <Row className="footer-top footer-rows" >
                    <Col sm={4} className="footer-contents" >
                        <Image src={lfooter} alt='Logo' className="footer-logo" />
                    </Col>
                    <Col sm={2} className="footer-contents">
                        <h5>ABOUT AFFIAMMUTA</h5>
                        <p>We are commited to massively <br /> increasing Igbo literacy in African <br />diaspora using technology.</p>
                    </Col>
                    <div className="footer-middle">
                    <Col sm={2} className="footer-contents">
                        <h5>CONTACT</h5>
                        <Link to="#">Contact@affiammuta.com</Link>
                        <p>+23490260717</p>
                    </Col>
                    <Col sm={2} className="footer-contents">
                        <h5>NAVIGATION</h5>
                        <Link to="#">Terms of use</Link><br />
                        <Link to="#">Privacy policy</Link>
                    </Col>
                    </div>
                    <Col lg={2} className="footer-contents">
                        <Image src={lfooter2} alt='Logo' className="footer-icon" />
                    </Col>
                </Row>
                <Row className="footer-bottom footer-rows">
                    <Col lg={6} md={6} >
                        <p>&copy; 2018 AFFIAMMUTA. All Rights Reserved</p>
                    </Col>
                    <Col lg={6} md={6} className="fb-twitter">
                        <Image src={fbIcon} alt='Logo' className="footer-icon" />
                        <Image src={tIcon} alt='Logo' className="footer-icon" />
                    </Col>
                </Row>
            </Grid>    
        </Jumbotron>   
    );
  }
}
export default Footer;