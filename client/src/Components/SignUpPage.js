import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button, Form, FormGroup, ControlLabel, FormControl, Checkbox } from "react-bootstrap";
import './SignUpPage.css';
import logo from './Assets/Ikenga.png';

 export default class SignUpPage extends Component {
  render() {
    return (
      <div >
        <Grid>
            <Jumbotron>
                 <img src={logo} alt='Logo' height= "69px" width= "97px" />
                <h3>Create an Account</h3>
                <Form>
                    <FormGroup>
                       
                        <Col>
                            <FormControl placeholder= "Username" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col>
                            <FormControl placeholder="Email" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                      
                        <Col >
                            <FormControl placeholder="Password" />
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col>
                            <FormControl placeholder="Confirm Password" />
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
        </Grid>
      </div>
    );
  }
}
