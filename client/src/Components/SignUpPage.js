import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { Jumbotron, Row, Col, Button, Form, FormGroup, FormControl, } from "react-bootstrap";
import './SignUpPage.css';
import logo from './Assets/Ikenga.png';

 export default class SignUpPage extends Component {
     state = {
        username: "",
        email: "",
        password: "",
     }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    handleSubmit = event => {
        event.preventDefault();
        const data = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        console.log(data)
        axios
        .post("https://affiammuta.herokuapp.com/users/create", data)
        .then(res =>{ 
             alert(JSON.stringify(res.data.message));
             console.log(res.data)
         })
    }
    
    render() {
        return (
            <div className="sign-up-background" >
                <Jumbotron className= "jumbo">
                    <img src={logo} alt='Logo'/>
                    <h3>Create an Account</h3>
                    <Row className="sign-up-message" >
                        <Col className="notify" ></Col>
                        <Col className="sign-up-text" >
                            {/* <p>To sign-up succesfully, please make sure the information you enter below is complete and accurate.</p> */}
                        </Col>
                    </Row>
                    <Form onSubmit= {this.handleSubmit}>
                        <FormGroup>
                        
                            <Row className="input-rows">
                                <FormControl className="input-styles" id="username" placeholder= "Username" onChange= {this.handleChange}  />
                            </Row>
                        </FormGroup>

                        <FormGroup>
                            <Row className="input-rows">
                                <FormControl className="input-styles" id="email" placeholder="Email" onChange= {this.handleChange}/>
                            </Row>
                        </FormGroup>

                        <FormGroup>
                        
                            <Row className="input-rows">
                                <FormControl className="input-styles" id= "password" type= "password" placeholder="Password" onChange= {this.handleChange}/>
                            </Row>
                        </FormGroup>

                        <FormGroup>
                            <Row className="input-rows">
                                <FormControl className="input-styles" type= "password" placeholder="Confirm Password" onChange= {this.handleChange}/>
                            </Row>
                        </FormGroup>

                        <FormGroup>
                            <Row>
                                <Button className="btn btn-success btn-get-started" type="submit">Get Started</Button>
                            </Row>
                        </FormGroup>
                        <p className="p" >Already got an account? <Link to="/">Sign In</Link></p>
                    </Form>;
                </Jumbotron>
        </div>
    );
  }
}
