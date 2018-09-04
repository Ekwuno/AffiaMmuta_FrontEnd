import React, { Component } from 'react';
import { Image } from "react-bootstrap";
import './Loader.css';
import loader from './Assets/ikengaLoad.png';

 export default class Loader extends Component {
  render() {
    if(this.props.size == "big"){
        return (
        <div className="overlay-p">
          <div id="overlay">
          <div className="loader"></div>
            <Image src={loader} alt="ikenga" className="animated ikenga-load"/>
          </div>
        </div>
      );
    }
    if(this.props.size == "small"){
        return (
          <div id="-small-overlay">
            <div className="small-loader"></div>
          </div>
      );
    }
  }
}