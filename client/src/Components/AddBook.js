import React, { Component } from 'react';
import axios from "axios";
import { withRouter } from "react-router-dom";
import { FormGroup, FormControl, Button, Image, Form, Row, ProgressBar } from "react-bootstrap";

 class AddBook extends Component {
    state = {
        bookImage: "",
        bookContent: "",
        category: "",
        progress: 0
    }
    onUploadProgress=() => {
        
    }
    handleChange =(event)=> {
        this.setState({category: event.target.value});
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
    }
    handleSubmit = event  => {
        let author = this.author.value;
        let title = this.title.value;  
        let price = this.price.value;  
        let category = this.state.category;        
        let description = this.description.value;
        console.log(category);
        event.preventDefault();
        const files = new FormData()
        files.append("bookImage", this.state.bookImage);
        files.append("bookContent", this.state.bookContent);
        files.append("author", author);
        files.append("title", title);
        files.append("price", price);
        files.append("category", category);
        files.append("description", description);
        axios({
                method: 'post',
                url: 'https://affiammuta.herokuapp.com/books/addbook',
                data: files,
                headers: {
                    'Content-Type': 'mulTipart/form-data'
                },
                onUploadProgress: ProgressEvent => {
                    let percentCompleted = Math.round((ProgressEvent.loaded *100) / ProgressEvent.total);
                    this.setState({progress: percentCompleted})
                }

            })
            .then(res => {
                if (res.data.message == "book created successfully") {
                    this.props.history.push("/adminhome")
                } 
                else {
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
                                <FormControl inputRef={(ref) => {this.author = ref}} type="text" name="author"  className="admin-title-row" />
                                </Row>
                        </FormGroup>
                        <FormGroup className="style-admin-paragraphs">
                            <Row>  
                                <Row><p className="admin-labels" id="title-input">Title</p></Row>
                                <FormControl inputRef={(ref) => {this.title = ref}} type="text" name="title" className="admin-title-row" />
                            </Row>
                        </FormGroup>
                        <Form inline>
                        <FormGroup>
                            <Row>  
                                    <span className="admin-labels price-head">Price</span>
                                </Row>
                                <FormControl inputRef={(ref) => {this.price = ref}} type="number" name="price" step="100" min="100" className="admin-price-cat cat-admin" />
                        </FormGroup>
                        <FormGroup  className="cat-margin">
                                    {/* <FormControl inputRef={(ref) => {this.category = ref}} type="text" name="category" className="admin-price-cat cat-admin" onChange= {this.handleChange}/>  */}
                                    <select className="admin-select-cat" value={this.state.category} onChange={this.handleChange} label="category">
                                        <option value="Comics">Comics</option>
                                        <option value="Educational">Educational</option>
                                        <option value="Folklores">Folklores</option>
                                    </select>
                            </FormGroup>
                            </Form>
                            <FormGroup>
                                <Row>  
                                    <Row><p className="admin-labels des-label">Description</p></Row>
                                    <FormControl inputRef={(ref) => {this.description = ref}} componentClass="textarea" type="text" name="description"  className="admin-desc-row" s/>
                                </Row>
                            </FormGroup>
                            <FormGroup>
                                <div className="button-progress-admin">
                                    <Button  className="btn btn-success btn-ad" type="submit">Upload</Button>
                                    <ProgressBar className="admin-progress" now={this.state.progress} />
                                </div>
                            </FormGroup>
                    </Form>
            </div>
        </div>
      </div>
    );
  }
}

export default withRouter(AddBook)