import React, { Component } from 'react';
import './index.css';

import RowPosters from '../../../components/RowPosters/'
import Spinner from '../../../components/Spinner/'
import MainLayout from '../../../components/layouts/MainLayout/'

import axios from 'axios';
import config from '../../../config'

import ReactPaginate from 'react-paginate';

const {
  baseUrlApi,
  apiKey
} = config.tmdb;

class Movie extends Component{

  state = {
    totalPages: '',
    data: [],
    offset: 1,
    loading: true,
    select: 'popularity.desc'
  }

  request = () => {
    axios.get(`
      ${baseUrlApi}discover/movie?api_key=${apiKey}&language=en-US
      &sort_by=${this.state.select}&include_adult=false&
      include_video=false&page=${this.state.offset}
      `)
    .then(response => {
      this.setState({
        totalPages: response.data.total_pages,
        data: response.data.results,
        loading: false
      })
    })
    .catch(error => {
      console.log(error);
      this.setState({
        loading: false
      })
    })
  }

  componentDidMount() {
    this.request();
  }

  handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected + 1);

    this.setState({
      offset: offset
    }, () => {
      this.request();
    })
  };

  totalPages = () => {
    if ( this.state.totalPages > 1000) {
      return 1000
    }else {
      return this.state.totalPages
    }
  }

  handleChange = (event) => {
    this.setState({
      select: event.target.value
    }, () => {
      this.request();
    })
  }

  render () {
    const {
      movie,
    } = config.categories;

    return (
      <div>
        {
          this.state.loading && <Spinner />
        }
        <MainLayout slideshow='false'>
            <select
              className="form-control pull-right"
              style={{'width':'auto'}}
              onChange={this.handleChange}
            >
              <option value="" selected disabled>Filter by</option>
              <option value="popularity.desc">Popularity</option>
              <option value="release_date.desc">Release date</option>
              <option value="revenue.desc">Revenue</option>
              <option value="primary_release_date.desc">Primary release date</option>
              <option value="original_title.desc">Original title</option>
              <option value="vote_average.desc">Vote average</option>
              <option value="vote_count.desc">Vote count</option>
            </select>
          <div className="wrapperRow">
            <RowPosters
              icon="ticket"
              title="Movies"
              contentToDisplay={18}
              type={movie}
              data={this.state.data}
            />
          <div className="wrapperPagination">
              <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={<a href="">...</a>}
                breakClassName={"break-me"}
                pageCount={this.totalPages()}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={this.handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"}
              />
            </div>
          </div>
        </MainLayout>
      </div>
    )
  }
}

export default Movie;
