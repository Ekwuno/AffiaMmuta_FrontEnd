import React, { Component } from 'react';
import { Image, Grid } from "react-bootstrap";
import { Link } from "react-router-dom";
import './AdminHome.css';
import AdminSearch from './AdminSearch';
import addbook from './Assets/AddBook.png';

 export default class AdminBooks extends Component {
  render() {
    return (
      <div>
        <div className="admin-search-add">
            <div className="admin-home-search">
                <AdminSearch/>
            </div>
            <div className="admin-add">
                <span>Add book</span>
                <Link to="/admin">
                    <Image src={addbook} alt=""/>
                </Link>
            </div>
        </div>
        <Grid>
            <Row>
                <Col>
                    
                </Col>
            </Row>
        </Grid>
      </div>
    );
  }
}