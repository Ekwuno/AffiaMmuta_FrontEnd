import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Row, Grid, Col, Jumbotron, Image } from "react-bootstrap";
import shelf from "./Assets/Shelf.png";
import tortoise from './Assets/FlyingTortoise.jpg';
import idioms from './Assets/IgboIdioms.gif';
import okowa from './Assets/Okowaokwu.jpg';
import phoenix from './Assets/BookOfPhoenix.jpg';
import concubine from './Assets/TheConcubine.jpg';
import fisherman from './Assets/TheFisherman.jpg';
import udala from './Assets/UnderTheUdalaTree.jpg';
import './HomeBody.css';

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
          <Grid className= "grid">
            <Row className= "show-grid text-center">
              <Col xs={12} sm={4} className= "wrapper" >
                <Row className="books-top" >
                  <Col className="image-container" >
                    <Image src={phoenix} alt='Logo' className="books-jpg" />
                  </Col>
                </Row>
                <Row className="books-bottom" ></Row>
              </Col>
              <Col xs={12} sm={4} className= "wrapper" >
                <Row className="books-top" >
                  <Col className="image-container" >
                    <Image src={idioms} alt='Logo'  />
                  </Col>
                </Row>
                <Row className="books-bottom" ></Row>
              </Col>
              <Col xs={12} sm={4} className= "wrapper" >
                <Row className="books-top" >
                    <Col className="image-container" >
                    <Image src={fisherman} alt='Logo'  />
                  </Col>
                </Row>
                <Row className="books-bottom" ></Row>
              </Col>
              <Col xs={12} sm={4} className= "wrapper" >
                <Row className="books-top" >
                  <Col className="image-container" >
                    <Image src={udala} alt='Logo' />
                  </Col>
                </Row>
                <Row className="books-bottom" ></Row>
              </Col>
              <Col xs={12} sm={4} className= "wrapper" >
                <Row className="books-top" >
                  <Col className="image-container" >
                    <Image src={concubine} alt='Logo'/>
                  </Col>
                </Row>
                <Row className="books-bottom" ></Row>
              </Col>
            </Row>
          </Grid>
          <Row className="head head-below" >
              <Col lg={6} xs={6} sm={4} className="span new-release-background"></Col>
              <Col lg={6} xs={6} sm={4} className= "span-title new-release-color">NEW RELEASES</Col>
            </Row>
          <Grid className="grid">  
            <Row className= "show-grid text-center">
              <Col xs={12} sm={4} className= "wrapper new-release-books" >
                <Row className="books-top" >
                  <Col className="image-container" >
                    <Image src={phoenix} alt='Logo' />
                  </Col>
                </Row>
                <Row className="books-bottom" ></Row>
              </Col>
              <Col xs={12} sm={4} className= "wrapper new-release-books" >
                <Row className="books-top" >
                  <Col className="image-container" >
                    <Image src={idioms} alt='Logo'/>
                  </Col>
                </Row>
                <Row className="books-bottom" ></Row>
              </Col>
              <Col xs={12} sm={4} className= "wrapper new-release-books" >
                <Row className="books-top" >
                  <Col className="image-container" >
                    <Image src={fisherman} alt='Logo' />
                  </Col>
                </Row>
                <Row className="books-bottom" ></Row>
              </Col>
              <Col xs={12} sm={4} className= "wrapper new-release-books" >
                <Row className="books-top" >
                  <Col className="image-container" >
                    <Image src={udala} alt='Logo' />
                  </Col>
                </Row>
                <Row className="books-bottom" ></Row>
              </Col>
              <Col xs={12} sm={4} className= "wrapper new-release-books" >
                <Row className="books-top" >
                  <Col className="image-container" >
                    <Image src={concubine} alt='Logo'/>
                  </Col>
                </Row>
                <Row className="books-bottom" ></Row>
              </Col>
            </Row>
            </Grid>
            <Row className="head head-below" >
              <Col lg={6} xs={6} sm={4} className="span"></Col>
              <Col lg={6} xs={6} sm={4} className= "span-title">COMICS</Col>
            </Row>
            <Grid className= "grid">
              <Row className= "show-grid text-center">
                <Col xs={12} sm={4} className= "wrapper" >
                <Row className="books-top" >
                  <Col className="image-container" >
                    <Image src={idioms} alt='Logo'  />
                  </Col>
                </Row>
                <Row className="books-bottom" ></Row>
                </Col>
                <Col xs={12} sm={4} className= "wrapper" >
                  <Row className="books-top" >
                  <Col className="image-container" >
                    <Image src={concubine} alt='Logo' />
                  </Col>
                </Row>
                <Row className="books-bottom" ></Row>
                </Col>
                <Col xs={12} sm={4} className= "wrapper" >
                  <Row className="books-top" >
                  <Col className="image-container" >
                    <Image src={tortoise} alt='Logo' />
                  </Col>
                </Row>
                <Row className="books-bottom" ></Row>
                </Col>
                <Col xs={12} sm={4} className= "wrapper" >
                  <Row className="books-top" >
                  <Col className="image-container" >
                    <Image src={fisherman} alt='Logo' />
                  </Col>
                </Row>
                <Row className="books-bottom" ></Row>
                </Col>
                <Col xs={12} sm={4} className= "wrapper" >
                  <Row className="books-top" >
                  <Col className="image-container" >
                    <Image src={okowa} alt='Logo' />
                  </Col>
                </Row>
                <Row className="books-bottom" ></Row>
                
                </Col>
            </Row>
          </Grid>
        </div>
          
      </div>
    );
  }
}