import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Jumbotron, Row, Col, Button, Form, FormGroup, FormControl, } from "react-bootstrap";
import axios from "axios";
import './LogIn.css';
import logo from './Assets/Ikenga.png';


export default class LogIn extends Component {
    state = {
        username: "",
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
        <div className="sign-in-background" >
                <Jumbotron className= "sign-in-box">
                    <img src={logo} alt='Logo'/>
                    <h3>Let's setup your account</h3>
                    <Form onSubmit={this.handleSubmit}>
                        <FormGroup>
                            <Row><p>Enter your username</p></Row>
                            <Row className="sign-in-rows">
                                <FormControl type="username" id="logName" onChange={this.handleChange} />
                            </Row>
                        </FormGroup>

                        <FormGroup>
                            <Row><p>Enter your password</p></Row>
                            <Row className="sign-in-rows">
                                <FormControl type="password" id="logPassword" onChange={this.handleChange} />
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Button className="btn btn-success btn-log-in" type="submit">Let's Begin</Button>
                            </Row>
                        </FormGroup>
                    </Form>;
                </Jumbotron>
        </div>
    );
  }
}