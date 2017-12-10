import React, { Component } from 'react';
import './index.css';
var Rating = require('react-rating');

class PosterInfo extends Component{

  render () {
    return (
      <div className="info">
        {
          this.props.rating ?
          <Rating
            initialRate={this.props.value}
            empty="fa fa-star-o"
            full="fa fa-star"
            readonly
          />
          : this.props.value
        }
      </div>
    )
  }
}

export default PosterInfo;
