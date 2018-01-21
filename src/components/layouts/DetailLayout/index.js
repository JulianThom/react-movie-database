import React, { Component } from 'react';
import './index.css';

class DetailLayout extends Component {

render ()
  {

    const backdropStyle = {
      'width': '100%',
      'height': '100vh',
      'backgroundImage': `url(${this.props.backdropImage})`,
      'backgroundSize': 'cover',
      'position': 'absolute',
      'top': '0',
      'zIndex': '-1',
      'opacity': '.3'
    }

    return (
      <div
        className="wrapperDetail"
        style={this.props.trailerIsDisplayed === true ? {opacity:0.2} : {opacity:1}}
        >
        <div className="layer">
          <div className="containerDetail">
            {this.props.children}
          </div>
          <div
            className="backdropImage"
            style={backdropStyle}
          >
          </div>
        </div>
      </div>
    )
  }
}

export default DetailLayout;
