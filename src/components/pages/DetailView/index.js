import React, { Component } from 'react';
import './index.css';

import {api_key, base_url_api, base_url_poster_w342, base_url_backdrop_w1280} from '../../../helper/helper.js';
import DetailViewLayout from '../../../components/layouts/DetailViewLayout/';
import axios from 'axios';
var Rating = require('react-rating');

class DetailView extends Component{

  state = {
    data: [],
    similar: [],
    routeID: this.props.match.params.id,
    routeCat: this.props.match.params.cat,
  };

  componentDidMount() {
    axios.get(`
        ${base_url_api}${this.state.routeCat}/${this.state.routeID}
        ?api_key=${api_key}&language=en-US&append_to_response=videos
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
        ${base_url_api}${this.state.routeCat}/${this.state.routeID}
        /similar?api_key=${api_key}&language=en-US&page=1
      `)
    .then(response => {
      this.setState({
        similar: response.data.results,
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render () {
    console.log(this.state.data);
    const genres = this.state.data.genres

    return (
      <div>
        <DetailViewLayout
          backgroundImage={`url(${base_url_backdrop_w1280}${this.state.data.backdrop_path})`}>
          <div className="poster">
            <img
              src={`${base_url_poster_w342}${this.state.data.poster_path}`}
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
                Release on {this.state.data.release_date}
              </p>
              <ul className="genres">
                {
                  genres && genres.slice(0, 1).map(function(value, elem) {
                    return (
                      <li key={elem}>{value.name}</li>
                    )
                  })
                }
              </ul>
            </div>
            <div className="overview">
              <p>
                {this.state.data.overview}
              </p>
            </div>
          </div>
        </DetailViewLayout>
      </div>
    )
  }
}

export default DetailView;
