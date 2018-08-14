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
        confirmPassword: "",
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
        if(this.state.password !== this.state.confirmPassword){
            alert('password dont match')
        }
        else(
            axios
            .post("https://affiammuta.herokuapp.com/users/create", data)
            .then(res =>{ 
            alert(JSON.stringify(res.data.message));
            console.log(res.data)
            })
        )
    }
    
    render() {
        return (
            <div className="sign-up-background" >
                <Jumbotron className= "jumbo">
                    <img src={logo} alt='Logo'/>
                    <h3>Let's setup your account</h3>
                    <Form onSubmit= {this.handleSubmit}>
                        <FormGroup>
                            <Row><p className="p">Pick a username</p></Row>
                            <Row className="input-rows">
                                <FormControl className="input-styles" id="username" onChange= {this.handleChange}  />
                            </Row>
                        </FormGroup>

                        <FormGroup>
                            <Row><p>Enter your email</p></Row>
                            <Row className="input-rows">
                                <FormControl className="input-styles" id="email" onChange= {this.handleChange}/>
                            </Row>
                        </FormGroup>

                        <FormGroup>
                            <Row><p>Pick a password</p></Row>
                            <Row className="input-rows">
                                <FormControl className="input-styles" id= "password" type= "password" onChange= {this.handleChange}/>
                            </Row>
                        </FormGroup>

                        <FormGroup>
                            
                            <Row><p>Confirm your password</p></Row>
                            <Row className="input-rows">
                                <FormControl className="input-styles" id="confirmPassword" type= "password" onChange= {this.handleChange}/>
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Button className="btn btn-success btn-get-started" type="submit">Let's Begin</Button>
                            </Row>
                        </FormGroup>
                        <p id="log-in" >Already got an account? <Link to="/Log-in">Sign In</Link></p>
                    </Form>;
                </Jumbotron>
        </div>
    );
  }
}
