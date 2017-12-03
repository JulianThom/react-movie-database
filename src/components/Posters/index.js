import React, { Component } from 'react';
import './index.css';
import {api_key, base_url_api, base_url_poster_w342} from '../../helper/helper.js';
import Poster from '../Poster/'
import axios from 'axios';

class Posters extends Component{
  state = {
    dataMovie: [],
    dataSerie: [],
  };

  componentDidMount() {
    axios.get(`${base_url_api}discover/movie?api_key=${api_key}&language=en-US
                &sort_by=vote_average.desc&include_adult=false&include_video=false&page=1
                &primary_release_year=2017&vote_count.gte=1000`)
    .then(response => {
      this.setState({
        dataMovie: response.data.results,
      })
    })
    .catch(function (error) {
      console.log(error);
    });

    axios.get(`${base_url_api}discover/tv?api_key=${api_key}&language=en-US
      &sort_by=vote_average.desc&first_air_date_year=2017&page=1&timezone=America
      %2FNew_York&vote_count.gte=50&include_null_first_air_dates=false`)
    .then(response => {
      this.setState({
        dataSerie: response.data.results,
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render () {
    return (
      <div className="wrapperPosters">
        <Poster
          dataMovie={this.state.dataMovie}
          dataSerie={this.state.dataSerie}
          contentToDisplay={20}
          />
      </div>
    )
  }
}

export default Posters;
