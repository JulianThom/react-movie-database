  import React, { Component } from 'react';
  import './index.css';

  import config from '../../config'
  import ItemMeta from '../ItemMeta'
  var Rating = require('react-rating');

  class Card extends Component {

    render() {

      const {
        movie,
        tv
      } = config.categories;

      const {
        play,
        ratingFilled,
        ratingEmpty
      } = config.icons;

      return (
        <div className="wrapperCard">
          <div className="poster">
            <a
              className={this.props.hasTrailer ? 'posterLinkHover' : 'posterLink'}
              onClick={this.props.posterClick}
              onMouseOver={this.props.posterOnMouseOver}
              target="blank"
            >
              <img
                src={this.props.srcPoster}
                alt={this.props.title}
              />
              {
                this.props.hasTrailer &&
                <i
                  className={`iconPlay ${play} fa-5x`}>
                </i>
              }
            </a>
          </div>
          <div className="infoDetail">
            <div className="title">
              {this.props.title}
            </div>
            <Rating
              initialRate={this.props.rating}
              empty={ratingEmpty}
              full={ratingFilled}
              readonly
              className="ratingDetail"
              />
              {
                this.props.cat === movie &&
                <div>
                  <ItemMeta
                    labelText="Released on "
                    labelValue={this.props.releaseDate}
                  />
                  <ItemMeta
                    labelText="Duration "
                    labelValue={`${this.props.runtime} min`}
                  />
                </div>
              }
              {
                this.props.cat === tv &&
                <div>
                  <ItemMeta
                    labelText="Created By "
                    labelValue={
                      this.props.createdBy && this.props.createdBy.map(function(value, elem) {
                        if ( elem <= 4 ) {
                          return (
                            <span className="itemList">{value.name}</span>
                          )
                        }
                      })
                    }
                  />
                  <ItemMeta
                    labelText="Seasons "
                    labelValue={this.props.totalSeasons}
                  />
                  <ItemMeta
                    labelText="Episodes "
                    labelValue={this.props.totalEpisodes}
                  />
                  <ItemMeta
                    labelText="First air date "
                    labelValue={this.props.firstAirDate}
                  />
                </div>
              }
                <ItemMeta
                  labelText="Genre "
                  labelValue={
                    this.props.genres && this.props.genres.map(function(value, elem) {
                      if ( elem <= 4 ) {
                        return (
                          <span className="itemList">{value.name}</span>
                        )
                      }
                    })
                  }
                />
          </div>
        </div>
      )
    }
  }

  export default Card;
