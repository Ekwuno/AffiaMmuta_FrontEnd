import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Jumbotron, ListGroup, ListGroupItem, Badge, FormGroup, FormControl, Button, Image, Form, Row, DropdownButton, MenuItem, Tabs, Tab } from "react-bootstrap";
import adminSearch from './Assets/Search.png';
import './AdminPage.css';


export default class AdminPage extends Component {
  render() {
    return (
        <div className="admin-main">
            
        <div className="admin-body">
            <div className="right-filter">
                <ListGroup className="nav-lists">
                    <ListGroupItem href="#link1" className="list-style" >
                        <p >All <Badge className="all">50</Badge></p> 
                    </ListGroupItem>
                    <ListGroupItem href="#link1" className="list-style">
                        <p >Educational <Badge className="edu">20</Badge></p> 
                    </ListGroupItem>
                    <ListGroupItem href="#link1" className="list-style">
                        <p >Folklores <Badge className="folk">30</Badge></p> 
                    </ListGroupItem>
                    <ListGroupItem href="#link1" className="list-style">
                        <p >Comics <Badge className="comc">10</Badge></p> 
                    </ListGroupItem>
                    </ListGroup>
            </div>
            <div className="left-body">
                <div>
                    <Form inline>
                        <FormGroup>
                            <FormControl type="text" placeholder="Find a book..." className="search search-admin" />
                            <Button type="submit" className= "button button-admin">
                                <Image src={adminSearch} alt='Logo'/>
                            </Button>
                        </FormGroup>
                    </Form>
                </div>
                <div className="upload-box">
                    <div className="up-title">
                        <h1 className="upload-title">Upload Books</h1>
                    </div>
                    <div>
                        <Form>
                            <Row className="upload-t"><p>Book File</p></Row>
                            <Row className="upload-forms">
                                <FormControl
                                id = ""
                                type = "file"
                                label = ""
                                className="bt" /
                                >
                            </Row>
                            <Row className="upload-t"><p>Book Cover</p></Row>
                            <Row className="upload-forms">
                                <FormControl
                                id = ""
                                type = "file"
                                className="bt"/
                                >
                            </Row>
                            <FormGroup className="style-admin-paragraphs">
                                <Row>  
                                    <Row><p className="admin-labels">Title</p></Row>
                                    <FormControl type="text" id=""  className="admin-title-row"/>
                                </Row>
                            </FormGroup>
                            <Form inline>
                                <FormGroup>
                                    <Row>  
                                        <Row><p className="admin-labels">Price</p></Row>
                                        <FormControl type="number" id=""  className="admin-price-cat cat-admin"/>
                                    </Row>
                                </FormGroup>
                                <FormGroup  className="cat-margin">
                                    <Row>  
                                        <Row><p className="cat-margin-title" >Category</p></Row>
                                        <DropdownButton 
                                            bsStyle
                                            title="Select Category"
                                            id=""
                                            className = "admin-price-cat cat-admin"
                                            >
                                            <MenuItem eventKey="1">Educational</MenuItem>
                                            <MenuItem eventKey="2">Comics</MenuItem>
                                            <MenuItem eventKey="2">Folklors</MenuItem>

                                        </DropdownButton>
                                    </Row>
                                </FormGroup>
                            </Form>
                            <FormGroup>
                                <Row>  
                                    <Row><p className="admin-labels">Description</p></Row>
                                    <FormControl componentClass="textarea"type="text" id=""  className="admin-desc-row"/>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <Row>
                                    <Button className="btn btn-success btn-ad" type="submit">Upload</Button>
                                </Row>
                            </FormGroup>
                    </Form>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
  }
}