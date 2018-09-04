import React, { Component } from 'react';
import { Row, Grid, Col, Jumbotron, Image, Button } from "react-bootstrap";
import shelf from "./Assets/Shelf.png";
import './HomeBody.css';
import HomePopular from './HomePopular';
import HomeNew from './HomeNew';
import HomeComics from './HomeComics';
// import tortoise from './Assets/FlyingTortoise.jpg';
// import idioms from './Assets/IgboIdioms.gif';
// import okowa from './Assets/Okowaokwu.jpg';
// import phoenix from './Assets/BookOfPhoenix.jpg';
// import concubine from './Assets/TheConcubine.jpg';
// import fisherman from './Assets/TheFisherman.jpg';
// import udala from './Assets/UnderTheUdalaTree.jpg';
// import cart from './Assets/CustomCart.png';


  export default class HomeBody extends Component {
    
  render() {
    
    
    return (
      <div className="home-books">
        <div>
          <Jumbotron className="behind">
            <Image src={shelf} alt='Logo' className="shelf" />
          </Jumbotron>
        </div>
        <div className="above">
          <Row className="head" >
            <Col lg={6} xs={6} sm={6} className="span"></Col>
            <Col lg={6} xs={6} sm={6} className= "span-title">MOST POPULAR</Col>
          </Row>
          <HomePopular/>
          <Row className="head head-below" >
              <Col lg={6} xs={6} sm={4} className="span new-release-background"></Col>
              <Col lg={6} xs={6} sm={4} className= "span-title new-release-color">NEW RELEASES</Col>
          </Row>
          <HomeNew/>
            <Row className="head head-below" >
              <Col lg={6} xs={6} sm={4} className="span"></Col>
              <Col lg={6} xs={6} sm={4} className= "span-title">COMICS</Col>
            </Row>
            <HomeComics/>
        </div>    
      </div>
    );
  }
}