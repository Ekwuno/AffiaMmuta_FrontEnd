import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Navbar,Jumbotron, Col, Row } from "react-bootstrap";
import logo from './Assets/Ikenga.png';
import './Footer.css';


 class Footer extends Component {
  render() {
    return (
        <Jumbotron className="footer">
            <Row>
                <Col lg={5} xs={12} sm={12}>
                    <img src={logo} alt='Logo' height= "50px" width= "84px" />
                </Col>
                <Col lg={7} xs={12} sm={12}>
                    <Row className="rights" >
                        <Col lg={5} xs={5} sm={4}>
                            <p>c 2018 AFFIAMMUTA. All Rights Reserved</p>
                        </Col>
                        <Col lg={3} xs={3} sm={4}>
                            <Link to ="/" className= "links">
                                About AffiaMmuta
                            </Link>
                        </Col>
                        <Col lg={4} xs={4} sm={4}>
                            <Link to ="mailto:affiammuta@gmail.com" className= "links">
                                Contact AffiaMmuta
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
            
        </Jumbotron>   
    );
  }
}
export default Footer;