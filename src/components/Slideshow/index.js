import React, { Component } from 'react';
import Slider from 'react-slick';
import './index.css';
import PosterInfo from '../PosterInfo/';
import {api_key, base_url_api, base_url_backdrop_w780} from '../../helper/helper.js';
import axios from 'axios';

const randomPage = Math.floor(Math.random() * 100);

class Slideshow extends Component {

  state = {
    data: [],
    loading: true
  };

  componentDidMount() {
    axios.get(`${base_url_api}movie/popular?api_key=${api_key}&language=en-US&page=${randomPage}`)
    .then(response => {
      this.setState({
        data: response.data.results,
        loading: false
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
      autoplay: false,
    };
    return (
      <div>
          {
            this.state.loading ? <span className="loader fa fa-spinner fa-pulse fa-3x"></span>
            :
            <Slider {...settings}>
              {
                this.state.data.slice(0, this.props.contentToDisplay).map(function(value, elem) {
                  return (
                    <div key={elem}>
                      <PosterInfo value={value.title}/>
                      <img src={base_url_backdrop_w780+value.backdrop_path} alt={value.title}/>
                    </div>
                  )
                })
              }
            </Slider>
          }
      </div>
    );
  }
}

export default Slideshow;
