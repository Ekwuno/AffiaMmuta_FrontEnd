import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
import './Library.css';


export default class Library extends Component {
  render() {
    return (
        <div className="library-background">
            <div className="library-layout">
                <div className="library-header">
                    <h2>Library</h2>
                </div>
                <div className="library-contents">
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
  }
}