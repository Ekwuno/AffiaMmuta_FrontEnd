import React, { Component } from 'react';
import './BookComments.css';
import axios from "axios";

 export default class BookComments extends Component {
   state = {
     comment: []
   }
   componentDidMount() {
    //  const bookId = this.props.match.params.id
     axios.get(`https://affiammuta.herokuapp.com/books/book/5b86a5bf37d63b001fd5e3c8/comments`)
     .then(res => {
       this.setState({comment: res.data})
        console.log(res.data)
     })
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
        {/* <div className="comment-box">
            <h2>ibesoft11@gmail.com</h2>
            <p>I was inspired to pick this up by the blurb claiming that it was 
                "inspired by Nigeria's folktales." Well, that's not quite true. Certainly
                , the characters are all Nigerian, and there are a few traditional tales told, 
                over the course of the book - but the story itself is clearly based on true events, 
                not on folktales.</p>
        </div>
        <div className="comment-box">
            <h2>ibesoft11@gmail.com</h2>
            <p>I was inspired to pick this up by the blurb claiming that it was 
                "inspired by Nigeria's folktales." Well, that's not quite true. Certainly
                , the characters are all Nigerian, and there are a few traditional tales told, 
                over the course of the book - but the story itself is clearly based on true events, 
                not on folktales.</p>
        </div> */}
      </div>
    );
  }
}