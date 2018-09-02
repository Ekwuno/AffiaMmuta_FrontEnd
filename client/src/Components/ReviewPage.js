import React, { Component } from 'react';
import { Image, Jumbotron, FormControl, Form, Button, Row } from "react-bootstrap";
import './ReviewPage.css';
import InfoBackground from './InfoBackground';
import abouthead from './Assets/AffiaMmutaWhite.png';
import logo from './Assets/Ikenga.png';

 export default class ReviewPage extends Component {
  render() {
    return (
      <div className="review-body">
        <InfoBackground>
            <Image src={abouthead} alt=""/>
            <p>We are commited to increasing Igbo literacy <br/>in African diaspora using technology</p>
        </InfoBackground>
        <Jumbotron className="review-jumbotron">
            <Image src={logo} alt='Logo'/>
            <h2>What do you think about the Affia-Mmuta website?</h2>
            <p>Be sure to let us know down here</p>
            <Form>
                <FormControl  componentClass="textarea" type="text" />
                <Row>
                    <Button>Submit</Button>
                </Row>
            </Form>
        </Jumbotron>
      </div>
    );
  }
}