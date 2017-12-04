import React, { Component } from 'react';
import './index.css';
import logoTMDB from '../../assets/logos/powered-by-rectangle-green.svg';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <a href="https://www.themoviedb.org/" target="blank">
          <img className="pull-right" src={logoTMDB} alt="TMDB logo" />
        </a>
      </div>
    )
  }
}

export default Footer;
