import React, { Component } from 'react';
import './index.css';

import config from '../../../config.js'
import DetailViewLayout from '../../../components/layouts/DetailViewLayout/';
import RowPosters from '../../../components/RowPosters/'

import axios from 'axios';
var Rating = require('react-rating');

const {
  baseUrlApi,
  apiKey
} = config.tmdb;

const {
  baseUrlBackdropW1280,
  baseUrlPosterW342
} = config.tmdb.assets;

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
        ${baseUrlApi}${this.state.routeCat}/${this.state.routeID}
        ?api_key=${apiKey}&language=en-US&append_to_response=videos
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
        ${baseUrlApi}${this.state.routeCat}/${this.state.routeID}
        /similar?api_key=${apiKey}&language=en-US&page=1
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
      ${baseUrlApi}${this.state.routeCat}/${this.state.routeID}
      /credits?api_key=${apiKey}
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

    const {
      genres,
      backdrop_path,
      poster_path,
      vote_average,
      release_date,
      runtime,
      overview,
      title
    } = this.state.data;

    return (
      <div>
        <DetailViewLayout
          backgroundImage={`url(${baseUrlBackdropW1280}${backdrop_path})`}>
          <div className="poster">
            <img
              src={`${baseUrlPosterW342}${poster_path}`}
              alt={title}
              />
          </div>
          <div className="infoDetailView">
            <div className="title">
              {title}
            </div>
            <Rating
              initialRate={Math.round(vote_average)/2}
              empty="fa fa-star-o"
              full="fa fa-star"
              readonly
              className="ratingDetailView"
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
              {overview}
            </p>
          </div>
          <div className="wrapperRow">
            <RowPosters
              icon="user"
              title="Cast"
              contentToDisplay={6}
              type={config.categories.person}
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
