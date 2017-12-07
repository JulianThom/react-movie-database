import React, { Component } from 'react';
import './index.css';
import PosterInfo from '../PosterInfo'

class Poster extends Component{

  render () {
    return (
      <div className="poster">
        <img src={this.props.posterURL} alt={this.props.value}/>
        <PosterInfo icon={this.props.icon} value={this.props.value}/>
      </div>
    )
  }
}

export default Poster;
