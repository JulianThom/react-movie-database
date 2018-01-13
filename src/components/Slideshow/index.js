import React, { Component } from 'react';
import Slider from 'react-slick';
import './index.css';
import PosterInfo from '../PosterInfo/';
import config from '../../config'
import missingBackdrop from '../../assets/images/missingBackdrop.jpg';
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
    currentSlide: 0
  };

  componentDidMount() {
    axios.get(`${baseUrlApi}movie/popular?api_key=${apiKey}&language=en-US&page=${randomPage}`)
    .then(response => {
      this.setState({
        data: response.data.results
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() {

    const settings = {
      centerPadding: '200px',
      slidesToShow: 1,
      dots: true,
      infinite: true,
      autoplay: true,
      centerMode: true,
      afterChange: (currentSlide) => {
        this.setState({
          currentSlide: currentSlide,
        })
      }
   };

   const {
     cat
   } = this.props;

    return (
      <div>
        <Slider {...settings}>
          {
            this.state.data.map ((value, elem) =>  {
              if ( elem < this.props.contentToDisplay) {

                const backdropUrl = `${baseUrlBackdropW780}${value.backdrop_path}`

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
                      <img
                        src={!value.backdrop_path ? missingBackdrop : backdropUrl}
                        alt={value.title}/>
                    </div>
                  </Link>
                )
              }
            })
          }
        </Slider>
      </div>
    );
  }
}

export default Slideshow;
