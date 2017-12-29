import React, { Component } from 'react';

import Navigation from './components/Navigation/'
import Footer from './components/Footer/'

import HomePage from './components/pages/Home/'
import MoviePage from './components/pages/Movie/'
import TvPage from './components/pages/Tv/'
import PersonPage from './components/pages/Person/'
import DetailViewPage from './components/pages/DetailView/'

import './App.css'
import config from './config'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

class App extends Component {

  render () {
    return (
      <Router>
        <div>
          <Navigation />
            <Route
              exact path="/"
              component={HomePage}
            />
            <Route
              path={`/${config.categories.movie}`}
              component={MoviePage}
            />
            <Route
              path={`/${config.categories.tv}`}
              component={TvPage}
            />
            <Route
              path={`/${config.categories.person}`}
              component={PersonPage}
            />
            <Route
              path="/detailView/:cat/:id"
              component={DetailViewPage}
            />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
