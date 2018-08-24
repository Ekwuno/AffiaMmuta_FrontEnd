import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Badge, Tabs, Tab } from "react-bootstrap";
import './BookInfo.css';
import udala from './Assets/UnderTheUdalaTree.jpg';
import filled from './Assets/IkengaFilled.png';


export default class BookInfo extends Component {
  render() {
    return (
            <div className="info-main">
                <div className="current-book">
                    <div className="read-cover">
                        <img src={udala} alt='Logo' className="read-book-cover"/>
                    </div>
                    <div className="read-des">
                        <h2>Under the Udala Tree</h2>
                        <p className="rate-title">by Chinelo Okparanta</p>
                        <p className="rate-price">&#8358;3000</p>
                        <div className="button-rating">
                            <button className="buy-book-btn">Buy Now</button>
                            <div className="book-ratings">
                                <img src={filled} alt="ratings" className=""/>
                                <Badge className="badge-rate">6</Badge>
                            </div>
                        </div>
                        <p className="book-des">Inspired by Nigeria's folktales and its war, Under the Udala Trees is a deeply searching, powerful debut about the dangers of living and loving openly.
                        Ijeoma comes of age as her nation does; born before independence, she is eleven when civil war breaks out in the young republic of Nigeria. Sent away to safety, she meets another displaced child and they, star-crossed, fall ...more</p>
                    </div>
                </div>
                <div>
                    <Tabs defaultActiveKey={1} >
                        <Tab eventKey={1} title="REVIEWS (3)">
                            Tab 1 content
                        </Tab>
                        <Tab eventKey={2} title="RELATED BOOKS">
                            Tab 2 content
                        </Tab>
                    </Tabs>
                </div>
            </div>
    );
  }
}