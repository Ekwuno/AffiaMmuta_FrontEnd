import React, { Component } from 'react';
import { Col, Row, Image, Grid, Button, Jumbotron } from "react-bootstrap";
// import { Link } from "react-router-dom";
import udala from './Assets/UnderTheUdalaTree.jpg';
import './SearchPage.css';
import axios from "axios";


export default class SearchPage extends Component {

    render() {

            
    return (
        <div>
            <div className="search-header">
                <h1>Search Results</h1>
                <Jumbotron className="search-description"> <p>You searched for the fall of Zazu- 5 items found </p></Jumbotron>
            </div>
            <Grid className= "grid">
                <Row className= "show-grid text-center">
                    <Col xs={12} sm={4} className= "wrapper">
                        <Row className="books-top" >
                            <Col className="image-container" >
                            <Image src={udala} alt='Logo' className="books-jpg" />
                            </Col>
                        </Row>
                        <Row className="books-bottom" >
                            <Col className="book-title" >
                            <span className= "title">The fall of Zazu</span>
                            <span className="author" >Chinonso Williams</span>
                            <span className="price" >&#8358;3000</span>
                            </Col>
                            <Col className="book-price" >
                            <Button className="book-buttons" type="submit">
                                <p>Buy</p>
                            </Button>
                            </Col>
                        </Row>
                    </Col>    
                    <Col xs={12} sm={4} className= "wrapper">
                        <Row className="books-top" >
                            <Col className="image-container" >
                            <Image src={udala} alt='Logo' className="books-jpg" />
                            </Col>
                        </Row>
                        <Row className="books-bottom" >
                            <Col className="book-title" >
                            <span className= "title">The fall of Zazu</span>
                            <span className="author" >Chinonso Williams</span>
                            <span className="price" >&#8358;3000</span>
                            </Col>
                            <Col className="book-price" >
                            <Button className="book-buttons" type="submit">
                                <p>Buy</p>
                            </Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={4} className= "wrapper">
                        <Row className="books-top" >
                            <Col className="image-container" >
                            <Image src={udala} alt='Logo' className="books-jpg" />
                            </Col>
                        </Row>
                        <Row className="books-bottom" >
                            <Col className="book-title" >
                            <span className= "title">The fall of Zazu</span>
                            <span className="author" >Chinonso Williams</span>
                            <span className="price" >&#8358;3000</span>
                            </Col>
                            <Col className="book-price" >
                            <Button className="book-buttons" type="submit">
                                <p>Buy</p>
                            </Button>
                            </Col>
                        </Row>
                    </Col>         
                    <Col xs={12} sm={4} className= "wrapper">
                        <Row className="books-top" >
                            <Col className="image-container" >
                            <Image src={udala} alt='Logo' className="books-jpg" />
                            </Col>
                        </Row>
                        <Row className="books-bottom" >
                            <Col className="book-title" >
                            <span className= "title">The fall of Zazu</span>
                            <span className="author" >Chinonso Williams</span>
                            <span className="price" >&#8358;3000</span>
                            </Col>
                            <Col className="book-price" >
                            <Button className="book-buttons" type="submit">
                                <p>Buy</p>
                            </Button>
                            </Col>
                        </Row>
                    </Col>         
                    <Col xs={12} sm={4} className= "wrapper">
                        <Row className="books-top" >
                            <Col className="image-container" >
                            <Image src={udala} alt='Logo' className="books-jpg" />
                            </Col>
                        </Row>
                        <Row className="books-bottom" >
                            <Col className="book-title" >
                            <span className= "title">The fall of Zazu</span>
                            <span className="author" >Chinonso Williams</span>
                            <span className="price" >&#8358;3000</span>
                            </Col>
                            <Col className="book-price" >
                            <Button className="book-buttons" type="submit">
                                <p>Buy</p>
                            </Button>
                            </Col>
                        </Row>
                    </Col>                       
                </Row>
            </Grid>
        </div>
    );
  }
}