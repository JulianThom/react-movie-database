import React, { Component } from 'react';
import './index.css';

import RowPosters from '../../../components/RowPosters/'
import Spinner from '../../../components/Spinner/'
import MainLayout from '../../../components/layouts/MainLayout/'

import axios from 'axios';
import config from '../../../config'

const {
  baseUrlApi,
  apiKey
} = config.tmdb;

class Home extends Component{

  state = {
    loading: true,
    dataMovie: [],
    dataTV: [],
    dataPerson: []
  };

  componentDidMount() {
    const bestMovies = axios.get(`${baseUrlApi}discover/movie?api_key=${apiKey}&language=en-US
                &sort_by=vote_average.desc&include_adult=false&include_video=false&page=1
                &primary_release_year=2017&vote_count.gte=1000`)
    .then(response => {
      this.setState({
        dataMovie: response.data.results
      })
    })
    .catch(error => {
      console.log(error);
    })

    const bestTvs = axios.get(`${baseUrlApi}discover/tv?api_key=${apiKey}&language=en-US
      &sort_by=vote_average.desc&first_air_date_year=2017&page=1&timezone=America
      %2FNew_York&vote_count.gte=50&include_null_first_air_dates=false`)
    .then(response => {
      this.setState({
        dataTV: response.data.results
      })
    })
    .catch(error => {
      console.log(error);
    })

    const bestPersons = axios.get(`${baseUrlApi}person/popular?api_key=${apiKey}&language=en-US&page=1`)
    .then(response => {
      this.setState({
        dataPerson: response.data.results,
      })
    })
    .catch(error => {
      console.log(error);
    })

    Promise.all([bestMovies, bestTvs, bestPersons]).then(() => {
      this.setState({
        loading: false
      })
    })
  }

  render () {

    const {
      movie,
      tv,
      person
    } = config.categories;

    return (
      <div>
        {
          this.state.loading && <Spinner />
        }
        <MainLayout slideshow='true' slideshowCat={movie}>
          <div className="wrapperRow">
            <RowPosters
              icon="ticket"
              title="Best movies of 2017"
              contentToDisplay={18}
              type={movie}
              data={this.state.dataMovie}
            />
            <RowPosters
              icon="television"
              title="Best series of 2017"
              contentToDisplay={18}
              type={tv}
              data={this.state.dataTV}
            />
            <RowPosters
              icon="user"
              title="Most popular actors"
              contentToDisplay={18}
              type={person}
              data={this.state.dataPerson}
            />
          </div>
        </MainLayout>
      </div>
    )
  }
}

export default Home;
