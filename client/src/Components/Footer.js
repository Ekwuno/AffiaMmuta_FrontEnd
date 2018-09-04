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

                        <Col lg={3} md={3} className="footer-contents" >
                            <Link to="/review"><Image src={lfooter} alt='Logo' className="footer-logo" /></Link>
                        </Col>
                        <Col lg={2} md={3} className="footer-contents">
                            <h5>ABOUT AFFIAMMUTA</h5>
                            <p>We are commited to massively <br /> increasing Igbo literacy in African <br />diaspora using technology.</p>
                        </Col>
                        <Col lg={2} md={3} className="footer-contents">
                                <h5>CONTACT</h5>
                                <Link to="#">Contact@affiammuta.com</Link>
                                <p>+23490260717</p>
                            </Col>
                            <Col lg={2} md={3} className="footer-contents">
                                <h5>NAVIGATION</h5>
                                <Link to="/about">About Us</Link><br />
                                <Link to="/policy">Privacy policy</Link>
                            </Col>
                    </Row>
                    <Row className="footer-bottom footer-rows">
                        <Col lg={8} md={6} className="footer-contents">
                            <Image src={lfooter2} alt='Logo' className="footer-icon" />
                        </Col>
                        <Col lg={2} sm={3} className="fData">
                            <p>&copy; 2018 AFFIAMMUTA. All Rights Reserved</p>
                        </Col>
                        <Col lg={2} sm={3} className="fb-twitter">
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
// import React, { Component } from 'react';
// import { Link } from "react-router-dom";
// import { Jumbotron, Image } from "react-bootstrap";
// import lfooter from './Assets/AffiaMmutaWhite.png';
// import lfooter2 from './Assets/FooterIcon.png';
// import fbIcon from './Assets/TwitterLogo.png';
// import tIcon from './Assets/FbWhiteLogo.png';
// import './Footer.css';


// class Footer extends Component {
//  render() {
//    return (
//        <Jumbotron className="footer">
//            <div className="footer-top-contents">
//                <div id="logoContent">
//                    <Image src={lfooter} alt='Logo' className="footer-logo" />
//                </div>
//                <div className="about-footer">
//                    <h5 >ABOUT AFFIAMMUTA</h5>
//                    <p>We are commited to massively <br /> increasing Igbo literacy in African diaspora using technology. Learn more</p>
//                </div>
//                <div  className="contact-footer">
//                    <h5 className="contact-head">CONTACT</h5>
//                    <Link to="#">Contact@affiammuta.com</Link>
//                    <p className="contact-no">+23490260717</p>
//                </div>
//                <div className="nav-footer">
//                    <h5>NAVIGATION</h5>
//                    <Link to="#">Terms of use</Link><br />
//                    <Link to="#" className="contact-no">Privacy policy</Link>
//                </div>
//                <div className="footer-icon-container">
//                    <Image src={lfooter2} alt='Logo' className="footer-icon" />
//                </div>
//            </div>
//            <div className="footer-bottom-contents">
//                <div className="footer-bottom-copy">
//                    <p>&copy; 2018 AFFIAMMUTA. All Rights Reserved</p>
//                </div>
//                <div className="fb-twitter">
//                    <Image src={fbIcon} alt='Logo' className="footer-icon" />
//                    <Image src={tIcon} alt='Logo' className="footer-icon" />
//                </div>
//            </div>
//        </Jumbotron>
//    );
//  }
// }
// export default Footer;