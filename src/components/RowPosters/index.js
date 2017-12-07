import React, { Component } from 'react';
import './index.css';
import {api_key, base_url_api, base_url_poster_w342, base_url_profile_sizes_w185} from '../../helper/helper.js';
import Poster from '../Poster/'
import RowTitle from '../RowTitle/'
import axios from 'axios';

class RowPosters extends Component{
  state = {
    dataMovie: [],
    dataSerie: [],
    dataPeople: [],
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

    axios.get(`${base_url_api}person/popular?api_key=${api_key}&language=en-US&page=1`)
    .then(response => {
      this.setState({
        dataPeople: response.data.results,
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render () {
    return (
      <div className="row">
        <RowTitle icon={this.props.icon} title={this.props.title}/>
        <div className="rowPoster">
          <div className="containerPoster">
            {
              this.props.type === 'movie' &&
              this.state.dataMovie.slice(0, this.props.contentToDisplay).map(function(value, elem) {
                return (
                  <Poster
                    key={elem}
                    icon="star"
                    posterURL={base_url_poster_w342+value.poster_path}
                    value={value.vote_average}
                  />
                )
              })
            }
            {
              this.props.type === 'serie' &&
              this.state.dataSerie.slice(0, this.props.contentToDisplay).map(function(value, elem) {
                return (
                  <Poster
                    key={elem}
                    icon="star"
                    posterURL={base_url_poster_w342+value.poster_path}
                    value={value.vote_average}
                  />
                )
              })
            }
            {
              this.props.type === 'actor' &&
              this.state.dataPeople.slice(0, this.props.contentToDisplay).map(function(value, elem) {
                return (
                  <Poster
                    key={elem}
                    posterURL={base_url_profile_sizes_w185+value.profile_path}
                    value={value.name}
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
