import React, { Component } from 'react';
import './index.css';

import config from '../../config'
import {rating} from '../../helper/'

import Poster from '../Poster/'
import RowTitle from '../RowTitle/'

class RowPosters extends Component{

  render () {

    const {
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
          icon && title
          ?
            <RowTitle
              icon={icon}
              title={title}
            />
          :
            ''
        }
        <div className="rowPoster">
          <div className="containerPoster">
            {
              data.map((value, elem) => {
                if ( elem < contentToDisplay ) {
                  return (
                    <Poster
                      key={elem}
                      icon="star"
                      posterURL={
                        cat === person
                         ? `${baseUrlProfileW185}${value.profile_path}`
                         : `${baseUrlPosterW342}${value.poster_path}`
                       }
                      rate={value.vote_average}
                      rating={cat === person ? false : true}
                      value={
                        cat === person
                         ? value.name
                         : rating(value.vote_average)
                       }
                      id={value.id}
                      cat={this.props.cat}
                      imageStatus={
                        cat === person
                         ? value.profile_path
                         : value.poster_path
                       }
                    />
                  )
                }
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default RowPosters;
