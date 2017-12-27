import React, { Component } from 'react';
import './index.css';
import PosterInfo from '../PosterInfo'
import { Link } from 'react-router-dom';

class Poster extends Component{

  render () {
    return (
      <div className="poster">
        <Link
          to={`/detailView/${this.props.cat}/${this.props.id}`}
        >
          <img
            src={this.props.posterURL}
            alt={this.props.value}
          />
          <PosterInfo
            icon={this.props.icon}
            value={this.props.value}
            rating={this.props.rating}
          />
        </Link>
      </div>
    )
  }
}

export default Poster;
