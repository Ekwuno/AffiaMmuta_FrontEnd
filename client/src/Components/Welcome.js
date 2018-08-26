import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Jumbotron, Button } from "react-bootstrap";
import "./Welcome.css";

 export default class Welcome extends Component {
  render() {
    return (
      <div >
            <Jumbotron reponsive className= "affia-header">
                <h3>Welcome to AffiaMmuta</h3>
                <p>We make learning fun and interactive</p>
                <Link to="/Sign-up">
                  <Button className="btn btn-success get-btn" type="submit">
                      Get Started
                  </Button>
                </Link>
            </Jumbotron>
      </div>
    );
  }
}