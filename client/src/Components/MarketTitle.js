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
                    <InputGroup className="market-btn-group">
                        <InputGroup.Addon className="market-btn-addon">
                                    {/* <img src={} alt='Logo' className="form-title-logo"/> */}
                        </InputGroup.Addon>
                        <DropdownButton title="sort books by">
                            <MenuItem eventKey="1">Most Recent</MenuItem>
                            <MenuItem eventKey="2">Popular Books</MenuItem>
                            <MenuItem eventKey="3">
                                Comics
                            </MenuItem>
                        </DropdownButton>
                    </InputGroup>
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