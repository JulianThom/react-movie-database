import React, { Component } from 'react';
import './index.css';

class DetailViewLayout extends Component {

render ()
  {
    return (
      <div
        className="wrapperDetailView"
        style={this.props.opacityLayer === true ? {opacity:0.2} : {opacity:1}}
        >
        <div className="layer">
          <div className="containerDetailView">
            {this.props.children}
          </div>
          <img className="backdropImage" src={this.props.backgroundImage} />
        </div>
      </div>
    )
  }
}

export default DetailViewLayout;
