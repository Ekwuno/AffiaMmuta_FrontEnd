import React, { Component } from 'react';
import './ReviewPage.css';
import InfoBackground from './InfoBackground';

 export default class GetReviews extends Component {
  render() {
    return (
      <div >
        <InfoBackground>
            <h2>AffiaMmuta Privacy Policy</h2>
        </InfoBackground>
        <div className="user-review-contents">
            <h3>Name of the person</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!
            </p>
        </div>
      </div>
    );
  }
}