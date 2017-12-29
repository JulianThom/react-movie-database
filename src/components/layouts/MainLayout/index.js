import React, { Component } from 'react';
import './index.css';

import Slideshow from '../../../components/Slideshow/'

class MainLayout extends Component {

  render ()
    {
      return (
        <div className="wrapperMain">
          <Slideshow contentToDisplay={5} />
          <div className="containerMain">
            {this.props.children}
          </div>
        </div>
      )
    }
}

export default MainLayout;
