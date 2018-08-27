import React, { Component } from 'react';
import { Col, Row, Image, Grid, Button } from "react-bootstrap";
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from "axios";
import cart from './Assets/CustomCart.png';


export default class AllBooks extends Component {
          state = {
              allBooks: [],
          };

        componentDidMount(){
                axios.get("https://affiammuta.herokuapp.com/books/latest")
                .then(res=>{
                    this.setState({allBooks: res.data});
            })
        }
        
    render() {
        const allbooks = this.state.allBooks.map(item =>
            <Col xs={12} sm={4} className= "wrapper market-wrapper">
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
                        <p>Buy</p>
                    </Button>
                    </Col>
                </Row>
            </Col>
        )
    return (
        <div>
            <Grid className= "grid">
                    <Row className= "show-grid text-center">
                        {allbooks}          
                    </Row>
            </Grid>
        </div>
    );
  }
}