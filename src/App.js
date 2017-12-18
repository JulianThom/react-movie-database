import React, { Component } from 'react';

import Navigation from './components/Navigation/'
import Footer from './components/Footer/'

import HomePage from './components/pages/Home/'
import MoviesPage from './components/pages/Movies/'
import SeriesPage from './components/pages/Series/'
import ActorsPage from './components/pages/Actors/'
import DetailViewPage from './components/pages/DetailView/'

import './App.css'

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
            <div className="mainWrapper">
              <Route
                exact path="/"
                component={HomePage}
              />
              <Route
                path="/movies"
                component={MoviesPage}
              />
              <Route
                path="/series"
                component={SeriesPage}
              />
              <Route
                path="/actors"
                component={ActorsPage}
              />
              <Route
                path="/detailView/:id"
                component={DetailViewPage}
              />
            </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
