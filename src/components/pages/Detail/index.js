import React, { Component } from 'react';
import './index.css';

import config from '../../../config.js'
import {rating} from '../../../helper/'
import DetailLayout from '../../../components/layouts/DetailLayout/';
import RowPosters from '../../../components/RowPosters/'
import RowReviews from '../../../components/RowReviews/'
import Spinner from '../../../components/Spinner/'

import axios from 'axios';
import YouTube from 'react-youtube';
import disableScroll from 'disable-scroll';
var Rating = require('react-rating');

const {
  baseUrlApi,
  apiKey
} = config.tmdb;

const {
  baseUrlBackdropW1280,
  baseUrlPosterW342
} = config.tmdb.assets;

class Detail extends Component{

  state = {
    loading: true,
    data: [],
    similar: [],
    cast: [],
    routeID: this.props.match.params.id,
    routeCat: this.props.match.params.cat,
    review: [],
    hasTrailer: false,
    showTrailer: false
  };

  request = () => {
    const content =  axios.get(`
      ${baseUrlApi}${this.state.routeCat}/${this.state.routeID}
      ?api_key=${apiKey}&language=en-US&append_to_response=videos
      `)
    .then(response => {
      this.setState({
        data: response.data,
      })
    })
    .catch(error => {
      console.log(error);
    })

    const similar = axios.get(`
      ${baseUrlApi}${this.state.routeCat}/${this.state.routeID}
      /similar?api_key=${apiKey}&language=en-US&page=1
      `)
    .then(response => {
      this.setState({
        similar: response.data.results
      })
    })
    .catch(error => {
      console.log(error);
    })

    const cast = axios.get(`
      ${baseUrlApi}${this.state.routeCat}/${this.state.routeID}
      /credits?api_key=${apiKey}
      `)
    .then(response => {
      this.setState({
        cast: response.data.cast
      })
    })
    .catch(error => {
      console.log(error);
    })

    const reviews =
    axios.get(`
      ${baseUrlApi}${this.state.routeCat}/${this.state.routeID}
      /reviews?api_key=${apiKey}&language=en-US&page=1
    `)
    .then(response => {
      this.setState({
        review: response.data.results
      })
    })
    .catch(error => {
      console.log(error);
    })

    Promise.all([content, similar, cast, reviews]).then(() => {
      this.setState({
        loading: false
      })
    })
  }

  componentDidMount() {
    this.request();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      routeID: nextProps.match.params.id,
      loading: true
    }, () => {
      this.request();
      window.scrollTo(0,0)
    })
  }

  onHoverPoster = () => {
    if ( this.state.data.videos.results.length <= 0 ) {
      this.setState({
        hasTrailer: false
      })
    }else{
      this.setState({
        hasTrailer: true
      })
    }
  }

  onClickPoster = () => {
    this.state.hasTrailer &&
    this.setState({
      showTrailer: true
    })
    this.state.hasTrailer&& disableScroll.on();
  };

  onClickCloseTrailer = () => {
    this.setState({
      showTrailer: false
    })
    disableScroll.off();
  };

  componentWillUnmount () {
    disableScroll.off();
  }

  render () {

    const {
      genres,
      backdrop_path,
      poster_path,
      vote_average,
      release_date,
      runtime,
      overview,
      title,
      videos
    } = this.state.data;

    return (
      <div>
        {
          this.state.loading && <Spinner />
        }
        {
          this.state.showTrailer && this.state.hasTrailer &&
          <div className="trailer">
            <i
              className="fa fa-window-close fa-2x iconClose pull-right"
              onClick={this.onClickCloseTrailer}
              >
            </i>
            <YouTube
              videoId={videos.results[0].key}
              id={videos.results[0].id}
              opts={config.trailer.opts}
            />
          </div>
        }
        <DetailLayout
          trailerIsDisplayed={this.state.showTrailer}
          backdropImage={`${baseUrlBackdropW1280}${backdrop_path}`}
          >
          <div className="wrapperInfo">
            <div className="poster">
              <a
                className={this.state.hasTrailer ? 'posterLinkHover' : 'posterLink'}
                onClick={this.onClickPoster}
                onMouseOver={this.onHoverPoster}
                target="blank"
              >
                <img
                  src={`${baseUrlPosterW342}${poster_path}`}
                  alt={title}
                />
                {
                  this.state.hasTrailer &&
                  <i
                    className="iconPlay fa fa-play-circle fa-5x">
                  </i>
                }
              </a>
            </div>
            <div className="infoDetail">
              <div className="title">
                {title}
              </div>
              <Rating
                initialRate={rating(vote_average)}
                empty="fa fa-star-o"
                full="fa fa-star"
                readonly
                className="ratingDetail"
                />
              <div className="secondaryInfo">
                <p>
                  Released on {release_date}
                </p>
                <p>
                  Duration: {runtime} min.
                </p>
                <ul className="genres">
                  {
                    genres && genres.map(function(value, elem) {
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
          <div className="overview">
            <p>
              {overview}
            </p>
          </div>
          <div className="wrapperRow">
            {
              this.state.cast.length >= 1 &&
              <RowPosters
                icon="user"
                title="Cast"
                contentToDisplay={6}
                type={config.categories.person}
                data={this.state.cast}
              />
            }
            {
              this.state.similar.length >= 1 &&
              <RowPosters
                icon="chain"
                title="Similars"
                contentToDisplay={6}
                type={this.state.routeCat}
                data={this.state.similar}
              />
            }
            {
              this.state.review.length >= 1 &&
              <RowReviews
                data={this.state.review}
              />
            }
          </div>
        </DetailLayout>
      </div>
    )
  }
}

export default Detail;