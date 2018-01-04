import React, { Component } from 'react';
import './index.css';

import RowTitle from '../RowTitle/'
import Review from '../Review/'

class RowReviews extends Component{

  render () {
    return (
      <div className="rows">
        <RowTitle
          icon="commenting"
          title="Reviews"
        />
        {
          this.props.data.map(function(value, elem) {
            return (
              <Review
                key={elem}
                author={value.author}
                review={value.content}
                readMore={value.url}
              />
            )
          })
        }
      </div>
    )
  }
}

export default RowReviews;
