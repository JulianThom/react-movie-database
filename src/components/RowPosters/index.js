import React, { Component } from 'react';
import './index.css';
import {base_url_poster_w342, base_url_profile_sizes_w185} from '../../helper/helper.js';
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
              this.props.type === 'movie' &&
              this.props.data.slice(0, this.props.contentToDisplay).map(function(value, elem) {
                return (
                  <Poster
                    key={elem}
                    icon="star"
                    posterURL={base_url_poster_w342+value.poster_path}
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
              this.props.type === 'tv' &&
              this.props.data.slice(0, this.props.contentToDisplay).map(function(value, elem) {
                return (
                  <Poster
                    key={elem}
                    icon="star"
                    posterURL={base_url_poster_w342+value.poster_path}
                    rating={true}
                    value={Math.round(value.vote_average)/2}
                    id={value.id}
                    cat="tv"
                  />
                )
              })
            }
            {
              this.props.type === 'actor' &&
              this.props.data.slice(0, this.props.contentToDisplay).map(function(value, elem) {
                return (
                  <Poster
                    key={elem}
                    posterURL={base_url_profile_sizes_w185+value.profile_path}
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
