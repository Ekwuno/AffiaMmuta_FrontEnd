import React, { Component } from 'react';
import { Image, Jumbotron, FormControl, Form, Button, Row } from "react-bootstrap";
import './ReviewPage.css';
import { withRouter } from "react-router-dom";
import axios from "axios";
import InfoBackground from './InfoBackground';
import abouthead from './Assets/AffiaMmutaWhite.png';
import logo from './Assets/Ikenga.png';


class ReviewPage extends Component {
     state = {
        reviewName: "",
        reviewEmail: "",
        reviewBody: ""
     }
     handleChange=event => {
        this.setState({
            [event.target.id]: event.target.value
        });
     }
     handleSubmit = event => {
        event.preventDefault();
        const data = {
            name: this.state.reviewName,
            email: this.state.reviewEmail,
            reviewBody: this.state.reviewBody
        }
        console.log(data);
        axios.post("https://affiammuta.herokuapp.com/reviews/add", data)
        .then(res=> {
            alert(res.data.message);
            this.props.history.push("/");
        })
     }

  render() {
    return (
      <div className="review-body">
        <InfoBackground>
            <Image src={abouthead} alt=""/>
            <p>We are commited to increasing Igbo literacy <br/>in African diaspora using technology</p>
        </InfoBackground>
        <Jumbotron className="review-jumbotron">
            <Image src={logo} alt='Logo'/>
            <h2 className="smallscreen-message">Drop your details and reviews here</h2>
            <h2 className="bigscreen-message">What do you think about the Affia-Mmuta website?</h2>
            <p className="bigscreen-message">Be sure to let us know down here</p>
            <Form>
                <Row>
                    <FormControl type="text" className="review-name" id="reviewName" placeholder="Name..." onChange={this.handleChange} />
                    <FormControl type="email" className="review-email" id="reviewEmail" placeholder="E-mai..." onChange={this.handleChange}/>
                </Row>
                <FormControl componentClass="textarea" type="text" placeholder="How was your experience on the app?" id="reviewBody" onChange={this.handleChange} />
                <Row>
                    <Button type="submit" onClick={this.handleSubmit}>Submit</Button>
                </Row>
            </Form>
        </Jumbotron>
      </div>
    );
  }
}

export default withRouter(ReviewPage);