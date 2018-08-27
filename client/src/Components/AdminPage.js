import React, { Component } from 'react';
import axios from "axios";
import { ListGroup, ListGroupItem, Badge, FormGroup, FormControl, Button, Image, Form, Row, ProgressBar, MenuItem, DropdownButton } from "react-bootstrap";
import adminSearch from './Assets/Search.png';
import './AdminPage.css';


export default class AdminPage extends Component {

    state = {
        bookImage: "",
        bookContent: "",
        author: "",
        title: "",
        price: "",
        category: "",
        description: "",
        progress: 0
    }
    onUploadProgress=() => {
        
    }
    onChange = (event) => {
        switch (event.target.name) {
            case 'selectedFile':
                this.setState({
                    selectedFile: event.target.files[0]
                })
                break;
            default:
                this.setState({
                    [event.target.name]: event.target.value
                })
        }

    }
    handleSubmit = event  => {
        const {
            bookImage,
            bookContent,
            author,
            title,
            price,
            category,
            description
        } = this.state
        const files = new FormData()
        files.append("bookImage", bookImage);
        files.append("bookContent", bookContent);
        files.append("author", author);
        files.append("title", title);
        files.append("price", price);
        files.append("category", category);
        files.append("description", description);
        console.log(files)

        axios({
                method: 'post',
                url: 'https://affiammuta.herokuapp.com/books/addbook',
                data: files,
                 
                config: {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                 },
                // onUploadProgress: progressEvent => {
                //     let percentCompleted = Math.round((ProgressEvent.loaded *100) / ProgressEvent.total);
                //     console.log(percentCompleted);
                //     console.log(1)
                //     this.setState({progress: percentCompleted})
                // }

            })
            .then(res => {
                alert(JSON.stringify(res.data.message));
                if (res.data.message == "book created successfully") {
                    this.props.history.push("/")
                } else {
                    alert(JSON.stringify(res.data.message));
                }
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
                                <Row className="upload-t"><p>Book Cover</p></Row>
                                <Row className="upload-forms">
                                    <FormControl
                                    name = "bookImage"
                                    type = "file"
                                    label = ""
                                    className="" 
                                    onChange= {this.handleChange}/>
                                </Row>
                                <Row className="upload-t"><p>Book File</p></Row>
                                <Row className="upload-forms">
                                    <FormControl
                                    name = "bookContent"
                                    type = "file"
                                    className=""
                                    onChange= {this.handleChange}
                                    /
                                    >
                                </Row>
                                <FormGroup className="style-admin-paragraphs">
                                    <Row>  
                                        <Row><p className="admin-labels">Author</p></Row>
                                        <FormControl type="text" name="author"  className="admin-title-row" onChange= {this.handleChange}/>
                                    </Row>
                                </FormGroup>
                                <FormGroup className="style-admin-paragraphs">
                                    <Row>  
                                        <Row><p className="admin-labels">Title</p></Row>
                                        <FormControl type="text" name="title"  className="admin-title-row" onChange= {this.handleChange}/>
                                    </Row>
                                </FormGroup>
                                    <FormGroup>
                                        <Row>  
                                            <Row><p className="admin-labels">Price</p></Row>
                                            <FormControl type="number" name="price" step="100" min="100" className="admin-price-cat cat-admin" onChange= {this.handleChange}/>
                                        </Row>
                                    </FormGroup>
                                    {/* <FormGroup  className="cat-margin"> */}
                                        <Row> 
                                            <Row><p className="admin-labels">Category</p></Row>
                                            <FormControl type="text" name="category" className="admin-price-cat cat-admin" onChange= {this.handleChange}/> 
                                            {/* <Row><p className="cat-margin-title" >Category</p></Row>
                                            <DropdownButton 
                                                bsStyle
                                                title="Select Category"
                                                name="bookCategory"
                                                className = "admin-price-cat cat-admin"
                                                onChange= {this.handleChange}
                                                >
                                                <MenuItem eventKey="1">Educational</MenuItem>
                                                <MenuItem eventKey="2">Comics</MenuItem>
                                                <MenuItem eventKey="3">Folklors</MenuItem>

                                            </DropdownButton> */}
                                        </Row>
                                    {/* </FormGroup> */}
                                {/* <FormGroup> */}
                                    {/* <Row>   */}
                                        <Row><p className="admin-labels">Description</p></Row>
                                        <FormControl componentClass="textarea"type="text" name="description"  className="admin-desc-row" onChange= {this.handleChange}/>
                                    {/* </Row> */}
                                {/* </FormGroup> */}
                                <FormGroup>
                                    <Row>
                                        <Button className="btn btn-success btn-ad" type="submit">Upload</Button>
                                        <ProgressBar  now={this.onUploadProgress} />
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