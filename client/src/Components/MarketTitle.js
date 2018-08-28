import React, { Component } from 'react';
import { Jumbotron, InputGroup, DropdownButton, MenuItem, Row, Col } from "react-bootstrap";
import './MarketTitle.css';


export default class MarketTitle extends Component {
  render() {
    return (
        <div>
            <div className="market-title-dropdown">
                <h1>Market Place</h1>
                <div>
                    
                </div>
            </div>
            <Jumbotron className="market-interact-container">
                <Jumbotron className="market-interact">
                     <h1>readers today <br />leaders tommorow</h1>
                </Jumbotron>
            </Jumbotron>
        </div>
    );
  }
}