import React, { Component } from 'react';
import Slider from 'react-slick';
import './index.css';
import PosterInfo from '../PosterInfo/';
import config from '../../config'
import { Link } from 'react-router-dom';
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
    loading: true,
    currentSlide: 0
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
      autoplay: true,
      centerMode: true,
      afterChange: function (currentSlide) {
        this.setState({
          currentSlide: currentSlide,
        })
      }.bind(this)
   };

   const {
     cat
   } = this.props;

    return (
      <div>
          {
            this.state.loading ? <span className="loader fa fa-spinner fa-pulse fa-3x"></span>
            :
            <Slider {...settings}>
              {
                this.state.data.map ((value, elem) =>  {
                  if ( elem < this.props.contentToDisplay) {
                    return (
                      <Link
                        key={elem}
                        to={`/detailView/${cat}/${value.id}`}
                      >
                        <div>
                          {
                            (elem === this.state.currentSlide)
                            ? <PosterInfo value={value.title}/>
                            : ""
                          }
                          <img src={`${baseUrlBackdropW780}${value.backdrop_path}`} alt={value.title}/>
                        </div>
                      </Link>
                    )
                  }
                })
              }
            </Slider>
          }
      </div>
    );
  }
}

export default Slideshow;
