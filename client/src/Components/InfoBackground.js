import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Badge, Jumbotron } from "react-bootstrap";
import './PrivacyPolicy.css';

 export default class InfoBackground extends Component {
  render() {
    return (
      <div>
        <Jumbotron className="info-background">
        {this.props.children}
        </Jumbotron>
      </div>
    );
  }
}