import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
import './BookInfo.css';
import empty from './Assets/IkengaEmpty.png';
import filled from './Assets/IkengaFilled.png';


export default class BookInfo extends Component {
  render() {
    return (
        <div className="info-body">
            <div className="info-main">
                <div className="current-book">
                    <div className="read-cover"></div>
                    <div className="read-des">
                        <h2>Under the Udala Tree</h2>
                        <p className="rate-title">by Chinelo Okparanta</p>
                        <div className="rating-review">
                            <div className="ikenga-review">
                                <span>
                                    {/* <img src={filled} className="ikenga-filled"/> */}
                                </span>
                                <span>
                                    {/* <img src={filled} className="ikenga-filled"/> */}
                                </span>
                                <span>
                                    {/* <img src={filled} className="ikenga-filled"/> */}
                                </span>
                                <span>
                                    {/* <img src={filled} className="ikenga-filled"/> */}
                                </span>
                                <span>
                                    {/* <img src={empty} className="ikenga-empty"/> */}
                                </span>
                            </div>
                            <div className="ireview">
                            <p>1,300 Reviews</p>
                            </div>
                        </div>
                        <p className="book-des">Inspired by Nigeria's folktales and its war, Under the Udala Trees is a deeply searching, powerful debut about the dangers of living and loving openly.<br /><br/>
                        Ijeoma comes of age as her nation does; born before independence, she is eleven when civil war breaks out in the young republic of Nigeria. Sent away to safety, she meets another displaced child and they, star-crossed, fall ...more</p>
                        <div className="read-button-price">
                            <div>
                                <button className="buy-book-btn">Buy</button>
                            </div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div className="book-reviews">
                    <div className="review-title"><h3>Community Review</h3></div>
                    <div></div>
                </div>
            </div>
            <div className="info-related"></div>
        </div>
    );
  }
}