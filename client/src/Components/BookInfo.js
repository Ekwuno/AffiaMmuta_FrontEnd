import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
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
                        <div>
                            <button className="buy-book-btn">Buy Now</button>
                        </div>
                        <p className="book-des">Inspired by Nigeria's folktales and its war, Under the Udala Trees is a deeply searching, powerful debut about the dangers of living and loving openly.
                        Ijeoma comes of age as her nation does; born before independence, she is eleven when civil war breaks out in the young republic of Nigeria. Sent away to safety, she meets another displaced child and they, star-crossed, fall ...more</p>
                    </div>
                </div>
                <div className="book-reviews">
                    <div className="review-title"><h3>Community Review</h3></div>
                    <div></div>
                </div>
            </div>
    );
  }
}