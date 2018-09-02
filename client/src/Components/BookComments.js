import React, { Component } from 'react';
import './BookComments.css';
import axios from "axios";

 export default class BookComments extends Component {
   state = {
     comment: []
   }
   componentDidMount() {
     
   }
  render() {
    const comment = this.state.comment.map(item=>
      <div className="comment-box">
        <h2>{item.user.username}</h2>
        <p>{item.commentBody}</p>
      </div>
    )
    return (
      <div>
        {comment}
      </div>
    );
  }
}