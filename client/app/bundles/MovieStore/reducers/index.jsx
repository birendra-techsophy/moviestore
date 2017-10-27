import { combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import createMovieStoreReducer from './createMovieStoreReducer';
import fetchAllMovieStoreReducer from './fetchAllMovieStoreReducer';
import deleteMovieStoreReducer from './deleteMovieStoreReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  movieStore: createMovieStoreReducer,
  movieStoreList: fetchAllMovieStoreReducer,
  deleteMovieStore: deleteMovieStoreReducer
});

export default rootReducer;
