import React, { Component } from 'react';
import './index.css';

class Spinner extends Component{

  render () {
    return (
      <div className="wrapperSpinner">
        <i className="fa fa-spinner fa-pulse fa-5x fa-fw spinner"></i>
      </div>
    )
  }
}

export default Spinner;
