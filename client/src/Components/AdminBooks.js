import React, { Component } from 'react';
import { Image, Grid, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './AdminHome.css';
import './AdminBooks.css';
import AdminSearch from './AdminSearch';
import addbook from './Assets/AddBook.png';
import phoenix from './Assets/BookOfPhoenix.jpg';
import remove from './Assets/Delete.png';

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
        <Grid className="adminbooks-grid">
            <Row className="adminbooks-row">
                <Col xs={12} sm={4} className="adminbook-container">
                    <div className="adminbook-img-cont">
                        <Image src={phoenix} alt='Logo' />
                    </div>
                    <div className="adminbook-bottom-contents">
                        <div>
                            <h5>Igbo Idioms</h5>
                            <p>by Mark Uzomba</p>
                        </div>
                        <div className="admin-delete">
                            <Image src={remove} alt='Logo' />
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={4} className="adminbook-container">
                    <div className="adminbook-img-cont">
                        <Image src={phoenix} alt='Logo' />
                    </div>
                    <div className="adminbook-bottom-contents">
                        <div>
                            <h5>Igbo Idioms</h5>
                            <p>by Mark Uzomba</p>
                        </div>
                        <div className="admin-delete">
                            <Image src={remove} alt='Logo' />
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={4} className="adminbook-container">
                    <div className="adminbook-img-cont">
                        <Image src={phoenix} alt='Logo' />
                    </div>
                    <div className="adminbook-bottom-contents">
                        <div>
                            <h5>Igbo Idioms</h5>
                            <p>by Mark Uzomba</p>
                        </div>
                        <div className="admin-delete">
                            <Image src={remove} alt='Logo' />
                        </div>
                    </div>
                </Col>
                <Col xs={12} sm={4} className="adminbook-container">
                    <div className="adminbook-img-cont">
                        <Image src={phoenix} alt='Logo' />
                    </div>
                    <div className="adminbook-bottom-contents">
                        <div>
                            <h5>Igbo Idioms</h5>
                            <p>by Mark Uzomba</p>
                        </div>
                        <div className="admin-delete">
                            <Image src={remove} alt='Logo' />
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="adminbooks-row">
                <Col xs={12} sm={4} className="adminbook-container">

                </Col>
                <Col xs={12} sm={4} className="adminbook-container">

                </Col>
                <Col xs={12} sm={4} className="adminbook-container">

                </Col>
                <Col xs={12} sm={4} className="adminbook-container">

                </Col>
            </Row>
            
        </Grid>
      </div>
    );
  }
}