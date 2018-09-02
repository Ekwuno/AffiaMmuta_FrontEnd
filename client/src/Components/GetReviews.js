import React, { Component } from 'react';
import axios from "axios";
import './ReviewPage.css';
import InfoBackground from './InfoBackground';

 export default class GetReviews extends Component {
     state = {
         reviews: []
     }
     componentDidMount() {
        axios.get("https://affiammuta.herokuapp.com/reviews")
        .then(res=>{
            this.setState({
                reviews: res.data
            })
            console.log(res)
        })
     }
  render() {
      const reviews = this.state.reviews.map(item=>
        <div className="user-review-contents">
            <h3>{item.name}</h3>
            <p>
                {item.reviewBody}
            </p>
        </div>
    )
    return (
      <div >
        <InfoBackground>
            <h2>AffiaMmuta Privacy Policy</h2>
        </InfoBackground>
        {reviews}
      </div>
    );
  }
}