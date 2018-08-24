import React, { Component } from 'react';
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