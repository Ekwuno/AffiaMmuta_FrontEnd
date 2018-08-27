import React, { Component } from 'react';
import { Col, Row, Image, Grid, Button } from "react-bootstrap";
import InfiniteScroll from 'react-infinite-scroll-component';
import axios from "axios";
import cart from './Assets/CustomCart.png';


export default class AllBooks extends Component {
        constructor(){
            super();
            this.state = {
            allBooks: [],
            }
        }
        componentDidMount(){
                axios.get("https://affiammuta.herokuapp.com/books/latest")
                .then(res=>{
                    this.setState({allBooks: res.data});
            })
        }
        fetchData = () => {
            // a fake async api call like which sends
            // 20 more records in 1.5 secs
            //    setTimeout(() => {
            //        axios.get("https://affiammuta.herokuapp.com/books/latest")
            //            .then(res => {
            //                 this.setState({
            //                     allBooks: this.state.allBooks.concat(res.data)
            //                 });
            //            })
            //    }, 1500);
            this.componentDidMount();
        };
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
                        <Image src={cart} alt='cart' className="cart-books" />
                    </Button>
                    </Col>
                </Row>
            </Col>
        )
    return (
        <div>
            <Grid className= "grid">
                <InfiniteScroll dataLength ={this.state.allBooks.length} //This is important field to render the next data
                next={this.fetchData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                <p style={{textAlign: 'center'}}>
                <b>Yay! You have seen it all</b>
                </p>
                }
                                
                releaseToRefreshContent={
                <h3 style={{textAlign: 'center'}}>&#8593; Release to refresh</h3>
                }>
                    <Row className= "show-grid text-center">
                        {allbooks}          
                    </Row>
                </InfiniteScroll>
            </Grid>
        </div>
    );
  }
}