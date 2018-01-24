import React, { Component } from 'react';
import './index.css';

import config from '../../config'

class Spinner extends Component{

  render () {
    return (
      <div className="wrapperSpinner">
        <i className={`${config.icons.spinner} spinner`}></i>
      </div>
    )
  }
}

export default Spinner;
