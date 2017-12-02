import React, { Component } from 'react';
import Slider from 'react-slick';
import './index.css';
import {api_key, base_url_backdrop_w780} from '../../helper/helper.js';
import axios from 'axios';

const randomPage = Math.floor(Math.random() * 100);

class Slideshow extends Component {

  state = {
    data: []
  };

  componentDidMount() {
    axios.get
    (`https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=${randomPage}`)
    .then(response => {
      this.setState({
        data: response.data.results
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const settings = {
      slidesToShow: 2,
      dots: true,
      autoplay: true,
    };
    return (
      <div>
        <Slider {...settings}>
          {
            this.state.data.slice(0, this.props.contentToDisplay).map(function(value, elem) {
              return (
                <div key={elem}>
                  <div className="title">
                    <p>{value.title}</p>
                  </div>
                  <img src={base_url_backdrop_w780+value.backdrop_path} alt={value.title}/>
                </div>
              )
            })
          }
        </Slider>
      </div>
    );
  }
}

export default Slideshow;
