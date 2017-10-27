import { combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import createMovieStoreReducer from './createMovieStoreReducer';
import fetchAllMovieStoreReducer from './fetchAllMovieStoreReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  movieStore: createMovieStoreReducer,
  movieStoreList: fetchAllMovieStoreReducer
});

export default rootReducer;
