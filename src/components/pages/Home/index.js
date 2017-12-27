import React, { Component } from 'react';
import './index.css';

import RowPosters from '../../../components/RowPosters/'
import MainLayout from '../../../components/layouts/MainLayout/'

class Home extends Component{

  render () {
    return (
      <div>
        <MainLayout>
          <div className="wrapperRow">
            <RowPosters
              icon="ticket"
              title="Best movies of 2017"
              contentToDisplay={18}
              type="movie"
            />
            <RowPosters
              icon="television"
              title="Best series of 2017"
              contentToDisplay={18}
              type="serie"
            />
            <RowPosters
              icon="user"
              title="Most popular actors"
              contentToDisplay={18}
              type="actor"
            />
          </div>
        </MainLayout>
      </div>
    )
  }
}

export default Home;
