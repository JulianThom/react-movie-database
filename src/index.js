import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import './index.css';
import './global.css';
import App from './App';
import 'font-awesome/css/font-awesome.min.css';
import registerServiceWorker from './registerServiceWorker';

export const addMovies = (payload) => {
  console.log('hello je passe dans mon action')
  return {
    type: 'ADD_MOVIES',
    payload
  }
}

const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MOVIES':
      console.log('ADD_MOVIES', action.payload)
      // action.payload.id = Date.now();
      // const newState = [...state, action.payload];
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
}

const personsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PERSONS':
      console.log('ADD_PERSONS')
      return state;
    case 'REMOVE_PERSON':
      console.log('REMOVE_PERSON')
      return state;
    default:
      return state;
  }
}

const store = createStore(combineReducers({
  movies: moviesReducer,
  persons: personsReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
