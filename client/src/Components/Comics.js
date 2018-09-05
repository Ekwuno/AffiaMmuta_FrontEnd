import React, { Component } from 'react';
import { Col, Row, Image, Grid, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";


export default class Comics extends Component {
    constructor(){
        super();
        this.state = {
        comics: []
        }
    }
    componentDidMount(){
        axios.get("https://affiammuta.herokuapp.com/books/Comics")
    .then(res=>{
       this.setState({comics: res.data});
       
    })
    }
    render() {
        const comics = this.state.comics.map(item=>
        <Link to={{
            pathname:`/book/${item._id}`,
            state: {comics: item._id}
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
                <span className="price" >&#8358;{item.price}</span>
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
                {comics}          
                </Row>
            </Grid>
        </div>
    );
  }
}