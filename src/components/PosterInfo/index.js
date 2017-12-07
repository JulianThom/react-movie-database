import React, { Component } from 'react';
import './index.css';

class PosterInfo extends Component{

  render () {
    return (
      <div className="info">
        {this.props.icon && <i className={`fa fa-${this.props.icon}`}></i>}
        {this.props.value}
      </div>
    )
  }
}

export default PosterInfo;
