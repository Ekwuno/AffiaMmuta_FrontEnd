import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import { Badge, Tabs, Tab } from "react-bootstrap";
import './BookInfo.css';
import filled from './Assets/IkengaFilled.png';
import axios from 'axios';
import RelatedBooks from './RelatedBooks';

class BookInfo extends Component {
    state = {
        author: "",
        title: "",
        price: "",
        bookImage: "",
        ikenga: 0, 
        email: ""
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
            ikenga: res.data.book.ikenga,
            })
        })
    }

    payWithPaystack = event => {
        if(sessionStorage.getItem("user")){
            const userId =sessionStorage.getItem("user");
            const book = this.props.match.params.id;
            axios.get(`http://affiammuta.herokuapp.com/users/search?_id=${userId}`) 
                .then(res=>{
                    this.setState({email: res.data[0].email})
                    const PaystackPop = window.PaystackPop;
                    var handler = PaystackPop.setup({
                        key: 'pk_test_643b16d2cc562281510d64a3afc5a76fbb8dfaa7',
                        email: this.state.email,
                        amount: this.state.price * 100,
                        ref: '' + Math.floor((Math.random() * 1000000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
                        metadata: {
                            custom_fields: [{
                                display_name: "Mobile Number",
                                variable_name: "mobile_number",
                                value: "+2348012345678"
                            }]
                        },
                        callback: (response) =>{
                            const data = {
                                referenceId: response.reference,
                                user: userId,
                                book: book
                            }
                            console.log(data)
                            axios
                            .post("https://affiammuta.herokuapp.com/payment/create", data)
                            .then(res=>{
                                if(res.data.message == "book added successfully to user library"){
                                    this.props.history.push("/library")
                                }
                                else {
                                    alert(JSON.stringify(res.data.message));
                                }
                            })

                        },
                        onClose: function () {
                            alert('Thanks for using AffiaMmuta');
                        }
                    });
                    handler.openIframe();
                })
        }
        else {
            this.props.history.push("/login")
        }
        
        
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
                            <RelatedBooks/>
                        </Tab>
                    </Tabs>
                </div>
            </div>
    );
  }
}


export default withRouter(BookInfo)