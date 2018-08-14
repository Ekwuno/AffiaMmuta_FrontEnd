import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Jumbotron } from "react-bootstrap";
import './AdminPage.css';


export default class AdminPage extends Component {
  render() {
    return (
        <div className="admin-height">
            <Jumbotron>
                <h1>Admin page coming soon...</h1>
            </Jumbotron>
        </div>
    );
  }
}