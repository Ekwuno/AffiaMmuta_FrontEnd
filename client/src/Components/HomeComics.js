import React, { Component } from 'react';
import { Col, Row, Image, Grid, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import cart from './Assets/CustomCart.png';


export default class HomeComics extends Component {
    constructor(){
        super();
        this.state = {
        homeComics: []
        }
    }
    componentDidMount(){
        axios.get("https://affiammuta.herokuapp.com/books/latest?count=5")
    .then(res=>{
       this.setState({homeComics: res.data});
       
     })
    }
    render() {
        const homeComics = this.state.homeComics.map(item=>
        <Link to={{
            pathname:`/book/${item._id}`,
            state: {homePopular: item._id}
            }}>
            <Col xs={12} sm={4} className= "wrapper">
            <Row className="books-top" >
                <Col className="image-container" >
                <Image src={item.bookImage} alt='No image' className="books-jpg" />
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
        </Link>
        )
    return (
        <div>
            <Grid className= "grid">
                <Row className= "show-grid text-center">
                {homeComics}          
                </Row>
            </Grid>
        </div>
    );
  }
}