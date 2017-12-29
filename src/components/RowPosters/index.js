import React, { Component } from 'react';
import './index.css';

import config from '../../config'
import Poster from '../Poster/'
import RowTitle from '../RowTitle/'

class RowPosters extends Component{

  render () {
    return (
      <div className="rows">
        <RowTitle icon={this.props.icon} title={this.props.title}/>
        <div className="rowPoster">
          <div className="containerPoster">
            {
              this.props.type === `${config.categories.movie}` &&
              this.props.data.slice(0, this.props.contentToDisplay).map(function(value, elem) {
                return (
                  <Poster
                    key={elem}
                    icon="star"
                    posterURL={`${config.tmdb.assets.baseUrlPosterW342}${value.poster_path}`}
                    rate={value.vote_average}
                    rating={true}
                    value={Math.round(value.vote_average)/2}
                    id={value.id}
                    cat="movie"
                  />
                )
              })
            }
            {
              this.props.type === `${config.categories.tv}` &&
              this.props.data.slice(0, this.props.contentToDisplay).map(function(value, elem) {
                return (
                  <Poster
                    key={elem}
                    icon="star"
                    posterURL={`${config.tmdb.assets.baseUrlPosterW342}${value.poster_path}`}
                    rating={true}
                    value={Math.round(value.vote_average)/2}
                    id={value.id}
                    cat="tv"
                  />
                )
              })
            }
            {
              this.props.type === `${config.categories.person}` &&
              this.props.data.slice(0, this.props.contentToDisplay).map(function(value, elem) {
                return (
                  <Poster
                    key={elem}
                    posterURL={`${config.tmdb.assets.baseUrlProfileW185}${value.profile_path}`}
                    value={value.name}
                    rating={false}
                    id={value.id}
                    cat="person"
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
