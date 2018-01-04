import React, { Component } from 'react';
import './index.css';

class Review extends Component{

  render () {
    return (
      <div className="wrapperReview">
        <p className="author">{this.props.author}</p>
        <p className="review">{this.props.review}</p>
      </div>
    )
  }
}

export default Review;
