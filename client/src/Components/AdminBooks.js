import React, { Component } from 'react';
import { Image, Grid, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import './AdminHome.css';
import './AdminBooks.css';
import axios from "axios";
import AdminSearch from './AdminSearch';
import addbook from './Assets/AddBook.png';
import remove from './Assets/Delete.png';

 export default class AdminBooks extends Component {
    state = {
        adminBooks: []
    };
    componentDidMount(){
        axios.get("https://affiammuta.herokuapp.com/books/latest")
        .then(res=>{
        this.setState({adminBooks: res.data});
        })
    };
    
  render() {
    const adminBooks= this.state.adminBooks.map(item=>
        <Col xs={12} sm={4} className="adminbook-container">
            <div className="adminbook-img-cont">
                <Image src={item.bookImage} alt='Logo' />
            </div>
            <div className="adminbook-bottom-contents">
                <div>
                    <h5>{item.title}</h5>
                    <p>{item.author}</p>
                </div>
                <div className="admin-delete">
                   <Image src={remove} alt="delete" onClick={()=>{
                       axios.get(`https://affiammuta.herokuapp.com/books/delete/${item._id}`)
                           .then(res => {
                               alert(res.data.message)
                               window.location.reload();
                           });
                   }}/>
                </div>
            </div>
        </Col>
    )
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
                    {adminBooks}
                </Row>
                
            </Grid>
      </div>
    );
  }
}