import React, { Component } from 'react';
import './index.css';
import PosterInfo from '../PosterInfo'
import { Link } from 'react-router-dom';

class Poster extends Component{

  render () {

    const {
      cat,
      id,
      posterURL,
      value,
      icon,
      rating
    } = this.props;

    return (
      <div className="poster">
        <Link
          to={`/detailView/${cat}/${id}`}
        >
          <img
            src={posterURL}
            alt={value}
          />
          <PosterInfo
            icon={icon}
            value={value}
            rating={rating}
          />
        </Link>
      </div>
    )
  }
}

export default Poster;
