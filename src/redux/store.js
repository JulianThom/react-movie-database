import { createStore, combineReducers } from 'redux';
import { moviesReducer, personsReducer } from './reducers';


const store = createStore(combineReducers({
  movies: moviesReducer,
  persons: personsReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export {store};
