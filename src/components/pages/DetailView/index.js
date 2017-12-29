import React, { Component } from 'react';
import './index.css';

import config from '../../../config.js'
import DetailViewLayout from '../../../components/layouts/DetailViewLayout/';
import RowPosters from '../../../components/RowPosters/'

import axios from 'axios';
var Rating = require('react-rating');

class DetailView extends Component{

  state = {
    data: [],
    similar: [],
    cast: [],
    routeID: this.props.match.params.id,
    routeCat: this.props.match.params.cat,
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id !== nextProps.match.params.id) {
      // request pour mettre  a jour les data
    }
  }

  componentDidMount() {
    axios.get(`
        ${config.tmdb.baseUrlApi}${this.state.routeCat}/${this.state.routeID}
        ?api_key=${config.tmdb.apiKey}&language=en-US&append_to_response=videos
      `)
    .then(response => {
      this.setState({
        data: response.data,
      })
    })
    .catch(function (error) {
      console.log(error);
    });

    axios.get(`
        ${config.tmdb.baseUrlApi}${this.state.routeCat}/${this.state.routeID}
        /similar?api_key=${config.tmdb.apiKey}&language=en-US&page=1
      `)
    .then(response => {
      this.setState({
        similar: response.data.results,
      })
    })
    .catch(function (error) {
      console.log(error);
    });

    axios.get(`
      ${config.tmdb.baseUrlApi}${this.state.routeCat}/${this.state.routeID}
      /credits?api_key=${config.tmdb.apiKey}
      `)
    .then(response => {
      this.setState({
        cast: response.data.cast,
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render () {
    console.log(this.state.data);
    console.log(this.state.cast);
    console.log(this.state.similar);
    const genres = this.state.data.genres

    return (
      <div>
        <DetailViewLayout
          backgroundImage={`url(${config.tmdb.assets.baseUrlBackdropW1280}${this.state.data.backdrop_path})`}>
          <div className="poster">
            <img
              src={`${config.tmdb.assets.baseUrlPosterW342}${this.state.data.poster_path}`}
              alt={this.state.data.title}
              />
          </div>
          <div className="infoDetailView">
            <div className="title">
              {this.state.data.title}
            </div>
            <Rating
              initialRate={Math.round(this.state.data.vote_average)/2}
              empty="fa fa-star-o"
              full="fa fa-star"
              readonly
              className="ratingDetailView"
              />
            <div className="secondaryInfo">
              <p>
                Released on {this.state.data.release_date}
              </p>
              <p>
                Duration: {this.state.data.runtime} min.
              </p>
              <ul className="genres">
                {
                  genres && genres.slice(0, 4).map(function(value, elem) {
                    return (
                      <li key={elem}>{value.name}</li>
                    )
                  })
                }
              </ul>
            </div>
          </div>
          <div className="overview">
            <p>
              {this.state.data.overview}
            </p>
          </div>
          <div className="wrapperRow">
            <RowPosters
              icon="user"
              title="Cast"
              contentToDisplay={6}
              type="actor"
              data={this.state.cast}
            />
            <RowPosters
              icon="chain"
              title="Similars"
              contentToDisplay={6}
              type={this.state.routeCat}
              data={this.state.similar}
            />
          </div>
        </DetailViewLayout>
      </div>
    )
  }
}

export default DetailView;
