import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Welcome.css";
// import logo from './Assets/AffiaMmutaWelcome.jpg';

 export default class Welcome extends Component {
  render() {
    return (
      <div >
            <Jumbotron reponsive className= "affia-header">
                <h3>Welcome to AffiaMmuta</h3>
                <p>Increasing Igbo literacy with Technology</p>
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