import React, { Component } from 'react';
import './index.css';

import MainLayout from '../../../components/layouts/MainLayout/'

class Movie extends Component{

  render () {
    return (
      <div>
        <MainLayout slideshow='false'>
          <div>
            Movies Page!
          </div>
        </MainLayout>
      </div>
    )
  }
}

export default Movie;
