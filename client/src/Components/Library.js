import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './Library.css';
import image from './Assets/UnderTheUdalaTree.jpg';
import empty from './Assets/IkengaEmpty.png';
import filled from './Assets/IkengaFilled.png';



export default class Library extends Component {
  render() {
    return (
        <div className="library-background">
            <div className="library-layout">
                <div className="library-header">
                    <h2>Library</h2>
                </div>
                <div className="library-contents">
                    <div className="library-book-container">
                        <div className="library-book-position">
                            <div className="library-book-image">
                                <img src={image} className ="lib-cover-img" alt="" />
                            </div>
                            <div className="library-book-des">
                                <p className="library-book-name">Under the Udala Tree</p>
                                <p className="library-book-author">by Chinelo Okparanta</p>
                                <div className="ikenga-container">
                                    <span><img src={filled} className="ikenga-filled" alt=""/></span>
                                    <span><img src={filled} className="ikenga-filled" alt=""/></span>
                                    <span><img src={filled} className="ikenga-filled" alt=""/></span>
                                    <span><img src={filled} className="ikenga-filled" alt=""/></span>
                                    <span><img src={empty} className="ikenga-empty" alt=""/></span>
                                </div>
                                <p className="library-book-date">20/10/2018</p>
                                <div className="button-connect">
                                    <div>
                                        <Link to="/read">
                                        <button className="library-button">Read</button>
                                        </Link>
                                    </div>
                                    <div></div>
                                    <div></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
}