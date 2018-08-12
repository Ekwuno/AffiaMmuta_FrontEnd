import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Jumbotron, Row, Col, Button, Form, FormGroup, FormControl, } from "react-bootstrap";
import './LogIn.css';
import logo from './Assets/Ikenga.png';

export default class LogIn extends Component {
  render() {
    return (
        <div className="sign-in-background" >
                <Jumbotron className= "sign-in-box">
                    <img src={logo} alt='Logo'/>
                    <h3>Let's setup your account</h3>
                    <Form>
                        <FormGroup>
                            <Row><p>Enter your username</p></Row>
                            <Row className="sign-in-rows">
                                <FormControl />
                            </Row>
                        </FormGroup>

                        <FormGroup>
                            <Row><p>Enter your password</p></Row>
                            <Row className="sign-in-rows">
                                <FormControl type="password" />
                            </Row>
                        </FormGroup>
                        <FormGroup>
                            <Row>
                                <Button className="btn btn-success btn-get-started" type="submit">Let's Begin</Button>
                            </Row>
                        </FormGroup>
                    </Form>;
                </Jumbotron>
        </div>
    );
  }
}