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

const {
  movie,
  tv
} = config.categories;

class Movie extends Component{

  state = {
    totalPages: '',
    data: [],
    offset: 1,
    loading: true,
    select: 'popularity',
    sort: 'desc',
    btnSortActive: 'active',
    routeCat: this.props.match.params.cat,
  }

  requestType = () => {
    if (this.state.routeCat === movie) {
      return (
          `${baseUrlApi}discover/movie?api_key=${apiKey}&language=en-US
          &sort_by=${this.state.select}.${this.state.sort}&include_adult=false&
          include_video=false&page=${this.state.offset}`
      )
    }else if (this.state.routeCat === tv) {
      return (
        `${baseUrlApi}discover/tv?api_key=${apiKey}&language=en-US
        &sort_by=${this.state.select}.${this.state.sort}&page=${this.state.offset}
        &timezone=America%2FNew_York
        &include_null_first_air_dates=false`
      )
    }
  }

  request = () => {
    axios.get(this.requestType())
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
      select: event.target.value,
      offset: 1,
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

    const sortByConfig = this.state.routeCat === movie ? config.tmdb.sortMovie : config.tmdb.sortTv

    return (
      <div>
        {
          this.state.loading && <Spinner />
        }
        <MainLayout slideshow='false'>
            <form className="form-inline pull-right selectFilter">
              <div className="form-group">
              <select
                className="form-control"
                style={{'width':'auto'}}
                onChange={this.handleChange}
              >
                {
                  Object.keys(sortByConfig).map(function(keyName, keyIndex) {
                    return <option key={keyIndex} value={keyName}>{sortByConfig[keyName]}</option>
                  })
                }
              </select>
              <button
                type="button"
                className=
                {
                  `btn btn-primary ${
                    this.state.btnSortActive && this.state.sort ==='desc'
                    ? 'disabled'
                    : ''
                  }`
                }
                disabled=
                {
                  this.state.btnSortActive && this.state.sort ==='desc'
                  ? 'true'
                  : ''
                }
                onClick={() => this.handleSort('desc')}
                >
                  <i className="fa fa-sort-amount-desc">
                  </i> Desc
              </button>
              <button
                type="button"
                className=
                {
                  `btn btn-primary ${
                    this.state.btnSortActive && this.state.sort ==='asc'
                    ? 'disabled'
                    : ''
                  }`
                }
                disabled=
                {
                  this.state.btnSortActive && this.state.sort ==='asc'
                  ? 'true'
                  : ''
                }
                onClick={() => this.handleSort('asc')}
                >
                  <i className="fa fa-sort-amount-asc">
                  </i> Asc
              </button>
            </div>
          </form>
          <div className="wrapperRow">
            <RowPosters
              contentToDisplay={18}
              type={this.state.routeCat === 'movie' ? movie : tv}
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
                forcePage={this.state.offset-1}
              />
            </div>
          </div>
        </MainLayout>
      </div>
    )
  }
}

export default Movie;
