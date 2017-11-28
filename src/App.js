import React, { Component } from 'react';
import Navigation from './components/Navigation'
import Slideshow from './components/Slideshow'
import Footer from './components/Footer'
import './App.css'

class App extends Component {

  render () {
    return (
      <div>
        <Navigation />
        <div className="wrapper">
          <Slideshow />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
