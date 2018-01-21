import React, { Component } from 'react';
import './index.css';

var Rating = require('react-rating');

class HeaderDetail extends Component {

  render() {

    return (
      <div className="wrapperInfo">
        <div className="poster">
          <a
            className={this.props.hasTrailer ? 'posterLinkHover' : 'posterLink'}
            onClick={this.props.onClickPoster}
            onMouseOver={this.props.onHoverPoster}
            target="blank"
          >
            <img
              src={this.props.srcPoster}
              alt={this.props.title}
            />
            {
              this.props.hasTrailer &&
              <i
                className="iconPlay fa fa-play-circle fa-5x">
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
            empty="fa fa-star-o"
            full="fa fa-star"
            readonly
            className="ratingDetail"
            />
          <div className="secondaryInfo">
            <p>
              Released on {this.props.releaseDate}
            </p>
            <p>
              Duration: {this.props.runtime} min.
            </p>
            <ul className="genres">
              {
                this.props.genres && this.props.genres.map(function(value, elem) {
                  if ( elem <= 4 ) {
                    return (
                      <li key={elem}>{value.name}</li>
                    )
                  }
                })
              }
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default HeaderDetail;
