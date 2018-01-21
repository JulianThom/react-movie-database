import React, { Component } from 'react';
import './index.css';
import PosterInfo from '../PosterInfo'
import { Link } from 'react-router-dom';
import missingPoster from '../../assets/images/missingPoster.jpg';

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
          to={`/detail/${cat}/${id}`}
        >
          <img
            src={!this.props.imageStatus ? missingPoster : posterURL}
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
