import React, { Component } from 'react';
import Navigation from './components/Navigation/'
import Slideshow from './components/Slideshow/'
import RowPosters from './components/RowPosters/'
import Footer from './components/Footer/'
import './App.css'

class App extends Component {

  render () {
    return (
      <div>
        <Navigation />
        <div className="mainWrapper">
          <Slideshow contentToDisplay={5} />
          <div className="wrapperRow">
            <RowPosters
              icon="ticket"
              title="Best movies of 2017"
              contentToDisplay={18}
              type="movie"
            />
            <RowPosters
              icon="television"
              title="Best series of 2017"
              contentToDisplay={18}
              type="serie"
            />
            <RowPosters
              icon="user"
              title="Most popular actors"
              contentToDisplay={18}
              type="actor"
            />
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
