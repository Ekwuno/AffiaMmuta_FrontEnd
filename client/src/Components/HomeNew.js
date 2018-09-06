import React, { Component } from 'react';
import { Col, Row, Image, Grid, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import Loader from './Loader';


export default class HomeNew extends Component {
    constructor(){
        super();
        this.state = {
        homeNew: [],
        isLoadingNew: true
        }
    }
    componentDidMount(){
        axios.get("https://affiammuta.herokuapp.com/books/latest?count=5")
    .then(res=>{
       this.setState({
           homeNew: res.data,
           isLoadingNew: false
        });
       
     })
    }
    render() {
        const homeNew = this.state.homeNew.map(item=>
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
        if (this.state.isLoadingNew == true) {
            return (
                <Loader size="big"/>
            )
        }
        else {
            return (
                <div>
                    <Grid className= "grid">
                        <Row className= "show-grid text-center">
                        {homeNew}          
                        </Row>
                    </Grid>
                </div>
            )
        }
  }
}