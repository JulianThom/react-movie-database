import React, { Component } from 'react';
import './index.css';

import Slideshow from '../../../components/Slideshow/'

class MainLayout extends Component {

  render ()
    {
      return (
        <div className="wrapperMain">
          {
            this.props.slideshow === 'true' &&
            <Slideshow
              contentToDisplay={8}
              cat={this.props.slideshowCat}
            />
          }
          <div className="containerMain">
            {this.props.children}
          </div>
        </div>
      )
    }
}

export default MainLayout;
