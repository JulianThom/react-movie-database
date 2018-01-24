import React, { Component } from 'react';
import './index.css';

import config from '../../config'

var Rating = require('react-rating');

class PosterInfo extends Component{

  render () {
    return (
      <div className="info">
        {
          this.props.rating ?
          <Rating
            initialRate={this.props.value}
            empty={config.icons.ratingEmpty}
            full={config.icons.ratingFilled}
            readonly
          />
          : this.props.value
        }
      </div>
    )
  }
}

export default PosterInfo;
