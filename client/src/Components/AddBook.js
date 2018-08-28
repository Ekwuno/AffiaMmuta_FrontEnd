import React, { Component } from 'react';
import axios from "axios";
import { withRouter } from "react-router-dom";
import { ListGroup, ListGroupItem, Badge, FormGroup, FormControl, Button, Image, Form, Row, ProgressBar, MenuItem, DropdownButton } from "react-bootstrap";

 class AddBook extends Component {
    state = {
        bookImage: "",
        bookContent: "",
        progress: 0
    }
    onUploadProgress=() => {
        
    }
    handleFile = (event) => {
        switch (event.target.name) {
            case 'bookImage':
                this.setState({
                    bookImage: event.target.files[0]
                })
            case 'bookContent':
                this.setState({
                    bookContent: event.target.files[0]
                })
            default:
                null;
        }
        // console.log(this.state)
    }
    handleSubmit = event  => {
        let author = this.author.value;
        let title = this.title.value;  
        let price = this.price.value;  
        let category = this.category.value;        
        let description = this.description.value;
        event.preventDefault()
        const files = new FormData()
        files.append("bookImage", this.state.bookImage);
        files.append("bookContent", this.state.bookContent);
        files.append("author", author);
        files.append("title", title);
        files.append("price", price);
        files.append("category", category);
        files.append("description", description);
        console.log(files);

        axios({
                method: 'post',
                url: 'https://affiammuta.herokuapp.com/books/addbook',
                data: files,
                headers: {
                    'Content-Type': 'mulTipart/form-data'
                }
                // onUploadProgress: progressEvent => {
                //     let percentCompleted = Math.round((ProgressEvent.loaded *100) / ProgressEvent.total);
                //     console.log(percentCompleted);
                //     console.log(1)
                //     this.setState({progress: percentCompleted})
                // }

            })
            .then(res => {
                if (res.data.message == "book created successfully") {
                    this.props.history.push("/")
                } else {
                    alert(JSON.stringify(res.data.message));
                }
            });

    }
  render() {
    return (
      <div >
        <div className="upload-box">
            <div className="up-title">
                <h1 className="upload-title">Upload Books</h1>
            </div>
            <div>
                <Form encType='multipart/form-data' onSubmit = {this.handleSubmit}>
                    <Row className="upload-t"><p>Book Cover</p></Row>
                        <Row className="upload-forms">
                            <FormControl
                            name = "bookImage"
                            type = "file"
                            label = ""
                            className="" 
                            onChange= {this.handleFile}
                            />
                        </Row>
                        <Row className="upload-t"><p>Book File</p></Row>
                        <Row className="upload-forms">
                            <FormControl
                            name = "bookContent"
                            type = "file"
                            className=""
                            onChange= {this.handleFile}
                            />
                        </Row>
                        <FormGroup className="style-admin-paragraphs">
                            <Row>  
                                <Row><p className="admin-labels">Author</p></Row>
                                <FormControl inputRef={(ref) => {this.author = ref}} type="text" name="author"  className="admin-title-row" onChange= {this.handleChange}/>
                                </Row>
                        </FormGroup>
                        <FormGroup className="style-admin-paragraphs">
                            <Row>  
                                <Row><p className="admin-labels">Title</p></Row>
                                <FormControl inputRef={(ref) => {this.title = ref}} type="text" name="title"  className="admin-title-row" onChange= {this.handleChange}/>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>  
                                <Row><p className="admin-labels">Price</p></Row>
                                <FormControl inputRef={(ref) => {this.price = ref}} type="number" name="price" step="100" min="100" className="admin-price-cat cat-admin" onChange= {this.handleChange}/>
                            </Row>
                        </FormGroup>
                        {/* <FormGroup  className="cat-margin"> */}
                                <Row> 
                                    <Row><p className="admin-labels">Category</p></Row>
                                    <FormControl inputRef={(ref) => {this.category = ref}} type="text" name="category" className="admin-price-cat cat-admin" onChange= {this.handleChange}/> 
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
                                    <FormControl inputRef={(ref) => {this.description = ref}} componentClass="textarea"type="text" name="description"  className="admin-desc-row" onChange= {this.handleChange}/>
                                {/* </Row> */}
                            {/* </FormGroup> */}
                            <FormGroup>
                                <Row>
                                    <Button  className="btn btn-success btn-ad" type="submit">Upload</Button>
                                    {/* <ProgressBar  now={this.onUploadProgress} /> */}
                                </Row>
                            </FormGroup>
                    </Form>
            </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AddBook)