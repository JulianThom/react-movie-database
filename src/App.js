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

const {
  movie,
  tv,
  person
} = config.categories;

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
              exact path="/:cat/allmovies"
              component={MoviePage}
            />
            <Route
              exact path="/:cat/allseries"
              component={MoviePage}
            />
            <Route
              exact path={`/${person}`}
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
