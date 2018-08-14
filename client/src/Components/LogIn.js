import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Jumbotron, Row, Col, Button, Form, FormGroup, FormControl, Image } from "react-bootstrap";
import axios from "axios";
import './LogIn.css';
import logo from './Assets/Ikenga.png';
import facebook from './Assets/FacebookLogo.png';


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
            email: this.state.email,
            password: this.state.password
        }
        console.log(data)
        axios
        .post("https://affiammuta.herokuapp.com/login", data)
        .then(res =>{ 
            alert(JSON.stringify(res.data.message));
            console.log(res.data)
        })
    }
    facebookLogIn = event => {
        axios.get("https://affiammuta.herokuapp.com/login/facebook")
        .then(res=>{
            alert(res)

        })
    }

render() {
    return (
        <div className="sign-in-background" >
            <Jumbotron className= "sign-in-box">
                <Image src={logo} alt='Logo'/>
                <h3>Let's setup your account</h3>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Row><p>Enter your Email address</p></Row>
                        <Row className="sign-in-rows">
                            <FormControl type="email" id="email" onChange={this.handleChange} />
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row><p>Enter your password</p></Row>
                        <Row className="sign-in-rows">
                            <FormControl type="password" id="password" onChange={this.handleChange} />
                        </Row>
                    </FormGroup>
                    <FormGroup>
                        <Row>
                            <Button className="btn btn-success btn-log-in" type="submit">Let's Begin</Button>
                        </Row>
                    </FormGroup>
                </Form>
                    <FormGroup>
                        <Row>
                            <Button className="btn btn-success btn-log-in btn-facebook" type="submit" onClick={this.facebookLogIn}>
                                <Image src={facebook} alt='Logo' />
                                Login with Facebook
                            </Button>
                        </Row>
                    </FormGroup>
                    <p id="log-in" >You don't have an account? <Link to="/Sign-up">Sign Up</Link></p>
            </Jumbotron>
        </div>
    );
  }
}