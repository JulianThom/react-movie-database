import React, { Component } from 'react';
import './index.css';

class DetailViewLayout extends Component {

  render ()
    {
      const backgroundStyle = {
        'position': 'relative',
        'width': '100%',
        'height': 'calc(100vh - var(--headerFooterHeight))',
        'backgroundSize': 'cover',
        'backgroundImage': `${this.props.backgroundImage}`,
      }

      return (
        <div className="wrapperDetailView" style={backgroundStyle}>
          <div className="layer">
            <div className="containerDetailView">
              {this.props.children}
            </div>
          </div>
        </div>
      )
    }
}

export default DetailViewLayout;
