import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { Jumbotron, ListGroup, ListGroupItem, Badge, FormGroup, FormControl, Button, Image, Form, Row, DropdownButton, MenuItem, Tabs, Tab } from "react-bootstrap";
import adminSearch from './Assets/Search.png';
import './AdminPage.css';


export default class AdminPage extends Component {

    state = {
        book: "",
        bookImage: "",
        bookAuthor: "",
        bookTitle: "",
        bookPrice: "",
        bookCategory: "",
        bookDescription: "",
    }
    onChange = (event) => {
        switch (event.target.id) {
            case 'selectedFile':
                this.setState({
                    selectedFile: event.target.files[0]
                })
                break;
            default:
                this.setState({
                    [event.target.id]: event.target.value
                })
        }

    }
    handleSubmit = () => {
        const {
            book,
            bookImage,
            bookAuthor,
            bookTitle,
            bookPrice,
            bookCategory,
            bookDescription
        } = this.state
        const files = new FormData()
        files.append("book", book);
        files.append("bookImage", bookImage);
        files.append("bookAuthor", bookAuthor);
        files.append("bookTitle", bookTitle);
        files.append("bookPrice", bookPrice);
        files.append("bookCategory", bookCategory);
        files.append("bookDescription", bookDescription);
        console.log(files)

        axios({
                method: 'post',
                url: 'https://affiammuta.herokuapp.com/books/addbook',
                data: files,
                config: {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                }

            })
            .then(res => {
                console.log(res)
            })

    }

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
                            <Form action='https://affiammuta.herokuapp.com/books/addbook' method="post" enctype='mulTipart/form-data' onSubmit = {this.handleSubmit}>
                                <Row className="upload-t"><p>Book File</p></Row>
                                <Row className="upload-forms">
                                    <FormControl
                                    id = "book"
                                    type = "file"
                                    label = ""
                                    className="bt" 
                                    onChange= {this.handleChange}/
                                    >
                                </Row>
                                <Row className="upload-t"><p>Book Cover</p></Row>
                                <Row className="upload-forms">
                                    <FormControl
                                    id = "bookImage"
                                    type = "file"
                                    className="bt"
                                    onChange= {this.handleChange}/
                                    >
                                </Row>
                                <FormGroup className="style-admin-paragraphs">
                                    <Row>  
                                        <Row><p className="admin-labels">Author</p></Row>
                                        <FormControl type="text" id="bookAuthor"  className="admin-title-row" onChange= {this.handleChange}/>
                                    </Row>
                                </FormGroup>
                                <FormGroup className="style-admin-paragraphs">
                                    <Row>  
                                        <Row><p className="admin-labels">Title</p></Row>
                                        <FormControl type="text" id="bookTitle"  className="admin-title-row" onChange= {this.handleChange}/>
                                    </Row>
                                </FormGroup>
                                <Form inline>
                                    <FormGroup>
                                        <Row>  
                                            <Row><p className="admin-labels">Price</p></Row>
                                            <FormControl type="number" id="bookPrice"  className="admin-price-cat cat-admin" onChange= {this.handleChange}/>
                                        </Row>
                                    </FormGroup>
                                    <FormGroup  className="cat-margin">
                                        <Row>  
                                            <Row><p className="cat-margin-title" >Category</p></Row>
                                            <DropdownButton 
                                                bsStyle
                                                title="Select Category"
                                                id="bookCategory"
                                                className = "admin-price-cat cat-admin"
                                                onChange= {this.handleChange}
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
                                        <FormControl componentClass="textarea"type="text" id="bookDescription"  className="admin-desc-row" onChange= {this.handleChange}/>
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