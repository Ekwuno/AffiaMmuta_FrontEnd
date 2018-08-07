import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import Welcome from "../Components/Welcome";
import HomeBody from "../Components/HomeBody";

 export default class HomePage extends Component {
  render() {
    return (
      <div >
           <Welcome />
           <HomeBody />
      </div>
    );
  }
}