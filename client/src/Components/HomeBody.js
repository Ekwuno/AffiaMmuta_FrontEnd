import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { Row, Grid, Col, Jumbotron, Image, Button } from "react-bootstrap";
import shelf from "./Assets/Shelf.png";
import tortoise from './Assets/FlyingTortoise.jpg';
import idioms from './Assets/IgboIdioms.gif';
import okowa from './Assets/Okowaokwu.jpg';
import phoenix from './Assets/BookOfPhoenix.jpg';
import concubine from './Assets/TheConcubine.jpg';
import fisherman from './Assets/TheFisherman.jpg';
import udala from './Assets/UnderTheUdalaTree.jpg';
import cart from './Assets/CustomCart.png';
import './HomeBody.css';

 export default class HomeBody extends Component {
   constructor(){
     super();
     this.state = {
       popularBooks: []
     }
   }
   componentDidMount(){
     axios.get("https://affiammuta.herokuapp.com/books/latest?count=5")
     .then(res=>{
       this.setState({popularBooks: res.data});
       
     })
   }
  render() {
    
    const popular = this.state.popularBooks.map(item=>
  <Col xs={12} sm={4} className= "wrapper">
                <Row className="books-top" >
                  <Col className="image-container" >
                    <Image src={item.bookImage} alt='Logo' className="books-jpg" />
                  </Col>
                </Row>
                <Row className="books-bottom" >
                  <Col className="book-title" >
                  <span className= "title">{item.title}</span>
                  <span className="author" >{item.author}</span>
                  <span className="price" >&#8358;{item.price}</span>
                  </Col>
                  <Col className="book-price" >
                    <Button className="book-buttons" type="submit">
                      <Image src={cart} alt='cart' className="cart-books" />
                    </Button>
                  </Col>
                </Row>
              </Col>
  )
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
            {popular}          
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
                <Row className="books-bottom" >
                  <Col className="book-title" >
                  <span className= "title">The Concubine</span>
                  <span className="author" >Elechi Amadi</span>
                  <span className="price" >&#8358;3000</span>
                  </Col>
                  <Col className="book-price" >
                    <Button className="book-buttons" type="submit">
                      <Image src={cart} alt='cart' className="cart-books" />
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} sm={4} className= "wrapper new-release-books" >
                <Row className="books-top" >
                  <Col className="image-container" >
                    <Image src={idioms} alt='Logo'/>
                  </Col>
                </Row>
                <Row className="books-bottom" >
                  <Col className="book-title" >
                  <span className= "title">The Concubine</span>
                  <span className="author" >Elechi Amadi</span>
                  <span className="price" >&#8358;3000</span>
                  </Col>
                  <Col className="book-price" >
                    <Button className="book-buttons" type="submit">
                      <Image src={cart} alt='cart' className="cart-books" />
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} sm={4} className= "wrapper new-release-books" >
                <Row className="books-top" >
                  <Col className="image-container" >
                    <Image src={fisherman} alt='Logo' />
                  </Col>
                </Row>
                <Row className="books-bottom" >
                  <Col className="book-title" >
                  <span className= "title">The Concubine</span>
                  <span className="author" >Elechi Amadi</span>
                  <span className="price" >&#8358;3000</span>
                  </Col>
                  <Col className="book-price" >
                    <Button className="book-buttons" type="submit">
                      <Image src={cart} alt='cart' className="cart-books" />
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} sm={4} className= "wrapper new-release-books" >
                <Row className="books-top" >
                  <Col className="image-container" >
                    <Image src={udala} alt='Logo' />
                  </Col>
                </Row>
                <Row className="books-bottom" >
                  <Col className="book-title" >
                  <span className= "title">The Concubine</span>
                  <span className="author" >Elechi Amadi</span>
                  <span className="price" >&#8358;3000</span>
                  </Col>
                  <Col className="book-price" >
                    <Button className="book-buttons" type="submit">
                      <Image src={cart} alt='cart' className="cart-books" />
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col xs={12} sm={4} className= "wrapper new-release-books" >
                <Row className="books-top" >
                  <Col className="image-container" >
                    <Image src={concubine} alt='Logo'/>
                  </Col>
                </Row>
                <Row className="books-bottom" >
                  <Col className="book-title" >
                  <span className= "title">The Concubine</span>
                  <span className="author" >Elechi Amadi</span>
                  <span className="price" >&#8358;3000</span>
                  </Col>
                  <Col className="book-price" >
                    <Button className="book-buttons" type="submit">
                      <Image src={cart} alt='cart' className="cart-books" />
                    </Button>
                  </Col>
                </Row>
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
                <Row className="books-bottom" >
                  <Col className="book-title" >
                  <span className= "title">The Concubine</span>
                  <span className="author" >Elechi Amadi</span>
                  <span className="price" >&#8358;3000</span>
                  </Col>
                  <Col className="book-price" >
                    <Button className="book-buttons" type="submit">
                      <Image src={cart} alt='cart' className="cart-books" />
                    </Button>
                  </Col>
                </Row>
                </Col>
                <Col xs={12} sm={4} className= "wrapper" >
                  <Row className="books-top" >
                  <Col className="image-container" >
                    <Image src={concubine} alt='Logo' />
                  </Col>
                </Row>
                <Row className="books-bottom" >
                  <Col className="book-title" >
                  <span className= "title">The Concubine</span>
                  <span className="author" >Elechi Amadi</span>
                  <span className="price" >&#8358;3000</span>
                  </Col>
                  <Col className="book-price" >
                    <Button className="book-buttons" type="submit">
                      <Image src={cart} alt='cart' className="cart-books" />
                    </Button>
                  </Col>
                </Row>
                </Col>
                <Col xs={12} sm={4} className= "wrapper" >
                  <Row className="books-top" >
                  <Col className="image-container" >
                    <Image src={tortoise} alt='Logo' />
                  </Col>
                </Row>
                <Row className="books-bottom" >
                  <Col className="book-title" >
                  <span className= "title">The Concubine</span>
                  <span className="author" >Elechi Amadi</span>
                  <span className="price" >&#8358;3000</span>
                  </Col>
                  <Col className="book-price" >
                    <Button className="book-buttons" type="submit">
                      <Image src={cart} alt='cart' className="cart-books" />
                    </Button>
                  </Col>
                </Row>
                </Col>
                <Col xs={12} sm={4} className= "wrapper" >
                  <Row className="books-top" >
                  <Col className="image-container" >
                    <Image src={fisherman} alt='Logo' />
                  </Col>
                </Row>
                <Row className="books-bottom" >
                  <Col className="book-title" >
                  <span className= "title">The Concubine</span>
                  <span className="author" >Elechi Amadi</span>
                  <span className="price" >&#8358;3000</span>
                  </Col>
                  <Col className="book-price" >
                    <Button className="book-buttons" type="submit">
                      <Image src={cart} alt='cart' className="cart-books" />
                    </Button>
                  </Col>
                </Row>
                </Col>
                <Col xs={12} sm={4} className= "wrapper" >
                  <Row className="books-top" >
                  <Col className="image-container" >
                    <Image src={okowa} alt='Logo' />
                  </Col>
                </Row>
                <Row className="books-bottom" >
                  <Col className="book-title" >
                  <span className= "title">The Concubine</span>
                  <span className="author" >Elechi Amadi</span>
                  <span className="price" >&#8358;3000</span>
                  </Col>
                  <Col className="book-price" >
                    <Button className="book-buttons" type="submit">
                      <Image src={cart} alt='cart' className="cart-books" />
                    </Button>
                  </Col>
                </Row>        
                </Col>
            </Row>
          </Grid>
        </div>    
      </div>
    );
  }
}