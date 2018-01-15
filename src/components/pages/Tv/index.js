import React, { Component } from 'react';
import './index.css';

import MainLayout from '../../../components/layouts/MainLayout/'

class Tv extends Component{

  render () {
    return (
      <div>
        <MainLayout slideshow='false'>
          <div>
            Series Page!
          </div>
        </MainLayout>
      </div>
    )
  }
}

export default Tv;
