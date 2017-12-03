import React, { Component } from 'react';
import './index.css';
import {base_url_poster_w342} from '../../helper/helper.js';

class Poster extends Component{

  render () {
    console.log(this.props.dataMovie, this.props.dataSerie);
    return (
      <div>
        {
          this.props.dataMovie.slice(0, this.props.contentToDisplay).map(function(value, elem) {
            return (
              <div className="poster" key={elem}>
                <img src={base_url_poster_w342+value.poster_path} alt={value.title}/>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Poster;
