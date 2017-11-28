import React, { Component } from 'react';
import './index.css';
import logoTMDB from '../../assets/logos/powered-by-rectangle-green.svg';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <img className="pull-right" src={logoTMDB} alt="TMDB logo" />
      </div>
    )
  }
}

export default Footer;
