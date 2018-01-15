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
    data: [],
    offset: 1
  }

  request = () => {
    axios.get(`${baseUrlApi}discover/movie?api_key=${apiKey}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${this.state.offset}`)
    .then(response => {
      this.setState({
        data: response.data.results
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  componentDidMount() {
    this.request();
  }

  handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected + 1);

    this.setState({offset: offset}, () => {
      this.request();
      console.log(this.state.offset);
    })
  };

  render () {

    const {
      movie,
    } = config.categories;

    return (
      <div>
        <MainLayout slideshow='false'>
          <div className="wrapperRow">
            <RowPosters
              icon="ticket"
              title="Movies"
              contentToDisplay={18}
              type={movie}
              data={this.state.data}
            />
            <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={<a href="">...</a>}
              breakClassName={"break-me"}
              pageCount={100000}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
          </div>
        </MainLayout>
      </div>
    )
  }
}

export default Movie;
