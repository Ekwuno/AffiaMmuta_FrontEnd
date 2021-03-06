import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Jumbotron, Row, Button, Form, FormGroup, FormControl, Image, InputGroup } from "react-bootstrap";
import axios from "axios";
import './LogIn.css';
import logo from './Assets/Ikenga.png';
import facebook from './Assets/FacebookLogo.png';
import email from './Assets/EmailLogo.png';
import lock from './Assets/Padlock.png';
import Loader from './Loader';


export default class LogIn extends Component {
    state = {
        username: "",
        password: "",
        isSigningIn: false
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    handleSubmit = event => {
        this.setState({isSigningIn: true})
        event.preventDefault();
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        console.log(data)
        axios
        .post("https://affiammuta.herokuapp.com/login", data)
        .then(res =>{ 
            console.log(res)
            if (res.data.message=="Login successful."){
                sessionStorage.setItem  ("user", res.data.userId)
                this.props.history.push("/market")
            }
            else{
                alert(JSON.stringify(res.data.message));
            }
        })
    }
    facebookLogIn = event => {
        axios.get("https://affiammuta.herokuapp.com/login/facebook")
        .then(res=>{
            if (res.data.message==="Login successful"){
                this.props.history.push("/Market")
            }
            else{
                alert("Something went wrong, try again");
            }

        })
    }

render() {
    if (this.state.isSigningIn == true ) {
        return (
             <div className="sign-in-background" >
            <Jumbotron className= "sign-in-box">
                <Image src={logo} alt='Logo'/>
                <h3>Welcome back!</h3>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup className="style-formgroups">
                        <Row><p>Enter your Email address</p></Row>
                        <Row className="sign-in-rows">
                            <InputGroup className="login-input-group">
                                    <InputGroup.Addon>
                                        <img src={email} alt='Logo' className="form-title-logo"/>
                                    </InputGroup.Addon>
                                    <FormControl type="email" id="email" onChange={this.handleChange} />
                                </InputGroup>
                        </Row>
                    </FormGroup>
                    <FormGroup className="style-formgroups">
                        <Row><p>Enter your password</p></Row>
                        <Row className="sign-in-rows">
                                <InputGroup className="login-input-group">
                                    <InputGroup.Addon>
                                        <img src={lock} alt='Logo' className="form-title-logo"/>
                                    </InputGroup.Addon>
                                    <FormControl type="password" id="password" onChange={this.handleChange} />
                                </InputGroup>
                        </Row>
                    </FormGroup>
                    <FormGroup className="style-formgroups">
                        <Row>
                            <Button className="btn btn-success btn-log-in" type="submit">Let's Begin <Loader size ="small"/></Button>
                        </Row>
                    </FormGroup>
                </Form>
                    <FormGroup className="style-formgroups">
                        <Row>
                            <Button className="btn btn-success btn-log-in btn-facebook" type="submit" onClick={this.facebookLogIn}>
                                <Image src={facebook} alt='Logo' />
                                Login with Facebook
                            </Button>
                        </Row>
                    </FormGroup>
                    <p id="log-in" >You don't have an account? <Link to="/signup">Sign Up</Link></p>
            </Jumbotron>
        </div>
        )
    }
    else {
        return (
        <div className="sign-in-background" >
            <Jumbotron className= "sign-in-box">
                <Image src={logo} alt='Logo'/>
                <h3>Welcome back!</h3>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup className="style-formgroups">
                        <Row><p>Enter your Email address</p></Row>
                        <Row className="sign-in-rows">
                            <InputGroup className="login-input-group">
                                    <InputGroup.Addon>
                                        <img src={email} alt='Logo' className="form-title-logo"/>
                                    </InputGroup.Addon>
                                    <FormControl type="email" id="email" onChange={this.handleChange} />
                                </InputGroup>
                        </Row>
                    </FormGroup>
                    <FormGroup className="style-formgroups">
                        <Row><p>Enter your password</p></Row>
                        <Row className="sign-in-rows">
                                <InputGroup className="login-input-group">
                                    <InputGroup.Addon>
                                        <img src={lock} alt='Logo' className="form-title-logo"/>
                                    </InputGroup.Addon>
                                    <FormControl type="password" id="password" onChange={this.handleChange} />
                                </InputGroup>
                        </Row>
                    </FormGroup>
                    <FormGroup className="style-formgroups">
                        <Row>
                            <Button className="btn btn-success btn-log-in" type="submit">Let's Begin</Button>
                        </Row>
                    </FormGroup>
                </Form>
                    <FormGroup className="style-formgroups">
                        <Row>
                            <Button className="btn btn-success btn-log-in btn-facebook" type="submit" onClick={this.facebookLogIn}>
                                <Image src={facebook} alt='Logo' />
                                Login with Facebook
                            </Button>
                        </Row>
                    </FormGroup>
                    <p id="log-in" >You don't have an account? <Link to="/signup">Sign Up</Link></p>
            </Jumbotron>
        </div>
    )
    }
  }
}