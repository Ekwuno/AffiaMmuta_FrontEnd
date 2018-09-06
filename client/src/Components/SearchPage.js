import React, { Component } from 'react';
import { Col, Row, Image, Grid, Button, Jumbotron } from "react-bootstrap";
import { Link } from "react-router-dom";
import './SearchPage.css';
import axios from "axios";
import Loader from './Loader';


export default class SearchPage extends Component {
    state = {
        searchResults: [],
        isSearching: true
    }
    
    componentDidMount() {
        const { search } = this.props.match.params;
        axios.get(`https://affiammuta.herokuapp.com/books/search?title=${search}`)
        .then(res => {
            this.setState({
                searchResults: res.data,
                isSearching: false
            })
            console.log(res.data)
        })
    }
     componentDidUpdate() {
        const { search } = this.props.match.params;
        axios.get(`https://affiammuta.herokuapp.com/books/search?title=${search}`)
        .then(res => {
            this.setState({searchResults: res.data})
        })
    }
    render() {
        const searchResults = this.state.searchResults.map(item=> 
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
                            <span className= "title">{item.author}</span>
                            <span className="author" >{item.title}</span>
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
        if (this.state.isSearching == true ) {
            console.log(this.state.isSearching)
             return (
                 <Loader size="big"/>
             )
        } 
        else {
            return (
                <div>
                    <div className="search-header">
                        <h1>Search Results</h1>
                        <Jumbotron className="search-description"> <p>You searched for <strong>{this.props.match.params.search}</strong>- {this.state.searchResults.length} items found </p></Jumbotron>
                    </div>
                    <Grid className="search-grid grid">
                        <Row className= "show-grid text-center">
                            {searchResults}
                        </Row>
                    </Grid>
                </div>
            );
        }  
    
  }
}