import React, { Component } from 'react';
import './index.css';
import {api_key, base_url_api, base_url_poster_w342, base_url_profile_sizes_w185} from '../../../helper/helper.js';
import axios from 'axios';

class DetailView extends Component{

  state = {
    data: [],
    similar: []
  };

  componentDidMount() {
    axios.get(`${base_url_api}movie/284053?api_key=${api_key}&language=en-US&append_to_response=videos`)
    .then(response => {
      this.setState({
        data: response.data,
      })
    })
    .catch(function (error) {
      console.log(error);
    });

    axios.get(`${base_url_api}movie/284053/similar?api_key=${api_key}&language=en-US&page=1`)
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
    return (
      <div>
        {
          this.props.match.params.id
        }
      </div>
    )
  }
}

export default DetailView;
