import React, { Component } from 'react';

import Navigation from './components/Navigation/'
import Footer from './components/Footer/'

import HomePage from './components/pages/Home/'
import ContentPage from './components/pages/Content/'
import PersonPage from './components/pages/Person/'
import DetailPage from './components/pages/Detail/'

import './App.css'
import config from './config'

import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

const {
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
              path="/:cat/allmovies"
              component={ContentPage}
            />
            <Route
              path="/:cat/allseries"
              component={ContentPage}
            />
            <Route
              exact path={`/${person}`}
              component={PersonPage}
            />
            <Route
              path="/detail/:cat/:id"
              component={DetailPage}
            />
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
