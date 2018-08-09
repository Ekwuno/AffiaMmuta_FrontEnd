import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { Jumbotron, Col, Button, Form, FormGroup, FormControl, } from "react-bootstrap";
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
                    <img src={logo} alt='Logo' height= "69px" width= "97px" />
                    <h3>Create an Account</h3>
                    <Form onSubmit= {this.handleSubmit}>
                        <FormGroup>
                        
                            <Col>
                                <FormControl id="username" placeholder= "Username" onChange= {this.handleChange}  />
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col>
                                <FormControl id="email" placeholder="Email" onChange= {this.handleChange}/>
                            </Col>
                        </FormGroup>

                        <FormGroup>
                        
                            <Col >
                                <FormControl id= "password" type= "password" placeholder="Password" onChange= {this.handleChange}/>
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col>
                                <FormControl type= "password" placeholder="Confirm Password" onChange= {this.handleChange}/>
                            </Col>
                        </FormGroup>

                        <FormGroup>
                            <Col>
                                <Button className="btn btn-success myName" type="submit">Get Started</Button>
                            </Col>
                        </FormGroup>
                        <p>Already got an account? <Link to="/">Sign In</Link></p>
                    </Form>;
                </Jumbotron>
        </div>
    );
  }
}
