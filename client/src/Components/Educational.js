import React, { Component } from 'react';
import { Col, Row, Image, Grid, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";


export default class Educational extends Component {
    constructor(){
        super();
        this.state = {
        mostRead: []
        }
    }
    componentDidMount(){
        axios.get("https://affiammuta.herokuapp.com/books/Educational")
    .then(res=>{
       this.setState({mostRead: res.data});
       
    })
    }
    render() {
        const mostRead = this.state.mostRead.map(item=>
        <Link to={{
            pathname:`/book/${item._id}`,
            state: {mostRead: item._id}
            }}>
            <Col xs={12} sm={4} className= "wrapper">
            <Row className="books-top" >
                <Col className="image-container" >
                <Image src={item.bookImage} alt='Logo' className="books-jpg" />
                </Col>
            </Row>
            <Row className="books-bottom" >
                <Col className="book-title" >
                <span className= "title">{item.title.length<=20 ? item.title:item.title.slice(0,20)+' ...'}</span>
                <span className="author" >{item.author.length<=20 ? item.author:item.author.slice(0,20)+' ...'}</span>
                <span className="price" >&#8358;{Intl.NumberFormat().format(item.price)}</span>
                </Col>
                <Col className="book-price" >
                <Button className="book-buttons" type="submit">
                    <p>Buy</p>
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
                {mostRead}          
                </Row>
            </Grid>
        </div>
    );
  }
}