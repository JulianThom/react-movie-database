import React, { Component } from 'react';
import './index.css';

import MainLayout from '../../../components/layouts/MainLayout/'

class Person extends Component{

  render () {
    return (
      <div>
        <MainLayout slideshow='false'>
          <div>
            Actors Page!
          </div>
        </MainLayout>
      </div>
    )
  }
}

export default Person;
