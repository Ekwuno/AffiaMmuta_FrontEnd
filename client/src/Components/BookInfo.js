import React, { Component } from 'react';
import { Badge, Tabs, Tab } from "react-bootstrap";
import './BookInfo.css';
import filled from './Assets/IkengaFilled.png';
import axios from 'axios';


export default class BookInfo extends Component {
    state = {
        author: "",
        title: "",
        price: "",
        bookImage: "",
        ikenga: 0
    }
    componentDidMount(){
        const book = this.props.match.params.id
        axios.get(`https://affiammuta.herokuapp.com/books/book/${book}`)
        .then(res =>{
            this.setState({
            author: res.data.book.author,
            title: res.data.book.title,
            price: res.data.book.price,
            bookImage: res.data.book.bookImage,
            description: res.data.book.description,
            ikenga: res.data.book.ikenga
            })
        })
    }

    payWithPaystack() {
        const PaystackPop = window.PaystackPop;
        var handler = PaystackPop.setup({
            key: 'pk_test_643b16d2cc562281510d64a3afc5a76fbb8dfaa7',
            email: 'customer@email.com',
            amount: 10000 * 100,
            ref: '' + Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
            metadata: {
                custom_fields: [{
                    display_name: "Mobile Number",
                    variable_name: "mobile_number",
                    value: "+2348012345678"
                }]
            },
            callback: function (response) {
                alert('success. transaction ref is ' + response.reference);
            },
            onClose: function () {
                alert('window closed');
            }
        });
        handler.openIframe();
    }
    render() {
        return (
            <div className="info-main">
                <div className="current-book">
                    <div className="read-cover">
                        <img src={this.state.bookImage} alt='Logo' className="read-book-cover"/>
                    </div>
                    <div className="read-des">
                        <h2>{this.state.title}</h2>
                        <p className="rate-title">{this.state.author}</p>
                        <p className="rate-price">&#8358;{this.state.price}</p>
                        <div className="button-rating">
                                <script src="https://js.paystack.co/v1/inline.js"></script>
                                <button type="button" onClick={this.payWithPaystack} className="buy-book-btn"> Buy Now </button> 
                            <div className="book-ratings">
                                <img src={filled} alt="ratings" />
                                <Badge className="badge-rate">{this.state.ikenga}</Badge>
                            </div>
                        </div>
                        <p className="book-des">{this.state.description}</p>
                    </div>
                </div>
                <div className="book-tabs">
                    <Tabs defaultActiveKey={1} >
                        <Tab eventKey={1} title="REVIEWS (3)">
                            Tab 1 content
                        </Tab>
                        <Tab eventKey={2} title="RELATED BOOKS" className="right-tab">
                            Tab 2 content
                        </Tab>
                    </Tabs>
                </div>
            </div>
    );
  }
}