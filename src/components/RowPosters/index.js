import React, { Component } from 'react';
import './index.css';

import config from '../../config'
import {rating} from '../../helper/'

import Poster from '../Poster/'
import RowTitle from '../RowTitle/'

class RowPosters extends Component{

  render () {

    const {
      movie,
      tv,
      person
    } = config.categories;

    const {
      baseUrlPosterW342,
      baseUrlProfileW185
    } = config.tmdb.assets;

    const {
      icon,
      title,
      contentToDisplay,
      cat,
      data
    } = this.props;

    return (
      <div className="rows">
        {
          icon && title ?
          <RowTitle
            icon={icon}
            title={title}/>
          : ''
        }
        <div className="rowPoster">
          <div className="containerPoster">
            {
              cat === `${movie}` &&
              data.map(function(value, elem) {
                if ( elem < contentToDisplay ) {
                  return (
                    <Poster
                      key={elem}
                      icon="star"
                      posterURL={`${baseUrlPosterW342}${value.poster_path}`}
                      rate={value.vote_average}
                      rating={true}
                      value={rating(value.vote_average)}
                      id={value.id}
                      cat={movie}
                      imageStatus={value.poster_path}
                    />
                  )
                }
              })
            }
            {
              cat === `${tv}` &&
              data.slice(0, contentToDisplay).map(function(value, elem) {
                return (
                  <Poster
                    key={elem}
                    icon="star"
                    posterURL={`${baseUrlPosterW342}${value.poster_path}`}
                    rating={true}
                    value={rating(value.vote_average)}
                    id={value.id}
                    cat={tv}
                    imageStatus={value.poster_path}
                  />
                )
              })
            }
            {
              cat === `${person}` &&
              data.slice(0, contentToDisplay).map(function(value, elem) {
                return (
                  <Poster
                    key={elem}
                    posterURL={`${baseUrlProfileW185}${value.profile_path}`}
                    value={value.name}
                    rating={false}
                    id={value.id}
                    cat={person}
                    imageStatus={value.profile_path}
                  />
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default RowPosters;
