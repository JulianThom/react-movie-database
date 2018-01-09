import React, { Component } from 'react';
import './index.css';

const ReactMarkdown = require('react-markdown')

class Review extends Component{

  render () {
    return (
      <div className="wrapperReview">
        <p className="author">{this.props.author}</p>
        <div className="review">
          <ReactMarkdown
            source={this.props.review}
          />
        </div>
      </div>
    )
  }
}

export default Review;
