import React, { Component } from 'react';
import './index.css';

import Slideshow from '../../../components/Slideshow/'
import RowPosters from '../../../components/RowPosters/'

class Home extends Component{

  render () {
    return (
      <div>
        <Slideshow contentToDisplay={5} />
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
      </div>
    )
  }
}

export default Home;
