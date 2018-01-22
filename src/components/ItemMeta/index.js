import React, { Component } from 'react';
import './index.css';

class ItemMeta extends Component {
  render() {
    return (
      <div className="wrapperItemMeta">
          <span className="labelItem">{this.props.labelText}</span>
          {this.props.labelValue}
      </div>
    )
  }
}

export default ItemMeta;
