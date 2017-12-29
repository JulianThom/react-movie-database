import React, { Component } from 'react';
import Slider from 'react-slick';
import './index.css';
import PosterInfo from '../PosterInfo/';
import config from '../../config'
import axios from 'axios';

const {
  baseUrlApi,
  apiKey
} = config.tmdb;

const {
  baseUrlBackdropW780
} = config.tmdb.assets;

const randomPage = Math.floor(Math.random() * 100);

class Slideshow extends Component {

  state = {
    data: [],
    loading: true
  };

  componentDidMount() {
    axios.get(`${baseUrlApi}movie/popular?api_key=${apiKey}&language=en-US&page=${randomPage}`)
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
      centerPadding: '200px',
      slidesToShow: 1,
      dots: true,
      infinite: true,
      autoplay: false,
      centerMode: true
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
                      <img src={`${baseUrlBackdropW780}${value.backdrop_path}`} alt={value.title}/>
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
