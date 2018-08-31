import React, { Component } from 'react';
import { Image } from "react-bootstrap";
import './Loader.css';
import loader from './Assets/ikengaHead.png';

 export default class Loader extends Component {
  render() {
    return (
      <div className="loader">
          <Image src={loader} alt="page is loading, please wait"/>
      </div>
    );
  }
}