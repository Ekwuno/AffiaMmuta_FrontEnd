import React, { Component } from 'react';
import './BookComments.css';

 export default class BookComments extends Component {
  render() {
    return (
      <div>
        <div className="comment-box">
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
        </div>
      </div>
    );
  }
}