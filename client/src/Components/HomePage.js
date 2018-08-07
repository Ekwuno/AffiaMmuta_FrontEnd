import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./HomePage.css";
import Welcome from "../Components/Welcome";

 export default class HomePage extends Component {
  render() {
    return (
      <div >
           <Welcome />
      </div>
    );
  }
}