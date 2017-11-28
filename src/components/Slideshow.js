import React, { Component } from 'react';
import Slider from 'react-slick';
import './Slideshow.css';
import axios from 'axios';

class Slideshow extends Component {

  state = {
    data: []
  };

  componentDidMount() {
    axios.get
    ('https://api.themoviedb.org/3/movie/popular?api_key=a8ccc2c614a1931b007aa9a92c8afb41&language=en-US&page=1')
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
    let base_url = 'http://image.tmdb.org/t/p/w1280/';

    console.log(this.state.data)

    const settings = {
      slidesToShow: 2,
      dots: true,
      autoplay: true,
    };
    return (
      <div>
        <Slider {...settings}>
          {
            this.state.data.slice(0, 5).map(function(value, elem) {
              return (
                <div key={elem}>
                  <div className="title">
                    <p>{value.title}</p>
                  </div>
                  <img src={base_url+value.backdrop_path} alt={value.title}/>
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
