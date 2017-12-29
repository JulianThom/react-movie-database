import React, { Component } from 'react';
import './index.css';

import Slideshow from '../../../components/Slideshow/'
import config from '../../../config'

class MainLayout extends Component {

  render ()
    {
      return (
        <div className="wrapperMain">
          <Slideshow contentToDisplay={8} cat={this.props.slideshowCat} />
          <div className="containerMain">
            {this.props.children}
          </div>
        </div>
      )
    }
}

export default MainLayout;
