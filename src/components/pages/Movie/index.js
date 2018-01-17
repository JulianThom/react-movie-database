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
    select: 'popularity',
    sort: 'desc',
    btnSortActive: 'active'
  }

  request = () => {
    axios.get(`
      ${baseUrlApi}discover/movie?api_key=${apiKey}&language=en-US
      &sort_by=${this.state.select}.${this.state.sort}&include_adult=false&
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

  handleSort = (arg) => {
    this.setState({
      sort: arg,
      offset: 1,
      btnSortActive: 'active'
    }, () => {
      this.request();
    })
  }

  render () {
    const {
      movie,
    } = config.categories;

    const desc = 'desc';
    const asc = 'asc';

    return (
      <div>
        {
          this.state.loading && <Spinner />
        }
        <MainLayout slideshow='false'>
            <form className="form-inline pull-right">
              <div className="form-group">
              <select
                className="form-control"
                style={{'width':'auto'}}
                onChange={this.handleChange}
              >
                <option value="popularity">Popularity</option>
                <option value="release_date">Release date</option>
                <option value="revenue">Revenue</option>
                <option value="primary_release_date">Primary release date</option>
                <option value="original_title">Original title</option>
                <option value="vote_average">Vote average</option>
                <option value="vote_count">Vote count</option>
              </select>
              <button
                type="button"
                className={
                  this.state.btnSortActive && this.state.sort ==='desc'
                  ? 'btn btn-primary disabled'
                  : 'btn btn-primary'
                }
                onClick={() => this.handleSort(desc)}
                >
                  <i className="fa fa-sort-amount-desc">
                  </i> Desc
              </button>
              <button
                type="button"
                className={
                  this.state.btnSortActive && this.state.sort ==='asc'
                  ? 'btn btn-primary disabled'
                  : 'btn btn-primary'
                }
                onClick={() => this.handleSort(asc)}
                >
                  <i className="fa fa-sort-amount-asc">
                  </i> Asc
              </button>
            </div>
          </form>
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
                marginPagesDisplayed={1}
                pageRangeDisplayed={9}
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
