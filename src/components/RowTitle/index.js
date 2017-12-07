import React, { Component } from 'react';

class RowTitle extends Component{

  render () {
    return (
      <div>
        <h3><i className={`fa fa-${this.props.icon}`}></i> {this.props.title}</h3>
      </div>
    )
  }
}

export default RowTitle;
