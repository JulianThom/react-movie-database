import React, { Component } from 'react';
import './index.css';
import {base_url_poster_w342, base_url_profile_sizes_w185} from '../../helper/helper.js';

class Poster extends Component{

  render () {
    return (
      <div>
        <div className="rowPoster">
          <h3><i className="fa fa-ticket"></i> Best Movies of 2017</h3>
          <div className="containerPoster">
            {
              this.props.dataMovie.slice(0, this.props.contentToDisplay).map(function(value, elem) {
                return (
                  <div className="poster" key={elem}>
                    <img src={base_url_poster_w342+value.poster_path} alt={value.title}/>
                    <div className="info">
                      <i className="fa fa-star"></i> {value.vote_average}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="rowPoster">
          <h3><i className="fa fa-television"></i> Best TV Shows of 2017</h3>
          <div className="containerPoster">
            {
              this.props.dataSerie.slice(0, this.props.contentToDisplay).map(function(value, elem) {
                return (
                  <div className="poster" key={elem}>
                    <img src={base_url_poster_w342+value.poster_path} alt={value.title}/>
                    <div className="info">
                      <i className="fa fa-star"></i> {value.vote_average}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="rowPoster">
          <h3><i className="fa fa-user"></i> Most popular actor</h3>
          <div className="containerPoster">
            {
              this.props.dataPeople.slice(0, this.props.contentToDisplay).map(function(value, elem) {
                return (
                  <div className="poster" key={elem}>
                    <img src={base_url_profile_sizes_w185+value.profile_path} alt={value.name}/>
                    <div className="info">
                      {value.name}
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Poster;
