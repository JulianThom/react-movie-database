import React, { Component } from 'react';
import './index.css';

import RowTitle from '../RowTitle/'
import Review from '../Review/'

import config from '../../config'

class RowReviews extends Component{

  render () {
    return (
      <div className="rows">
        <RowTitle
          icon={config.icons.review}
          title="Reviews"
        />
        {
          this.props.data.map(function(value, elem) {
            return (
              <Review
                key={elem}
                author={value.author}
                review={value.content}
              />
            )
          })
        }
      </div>
    )
  }
}

export default RowReviews;
