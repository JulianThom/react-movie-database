import React, { Component } from 'react';
import Navigation from './components/Navigation'
import Slideshow from './components/Slideshow'
import './App.css'

class App extends Component {

  render () {
    return (
      <div>
        <Navigation />
        <div className="wrapper">
          <Slideshow />
        </div>
      </div>
    )
  }
}

export default App;
