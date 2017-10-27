import {
  POST_MOVIE,
  POST_MOVIE_SUCCESS,
  POST_MOVIE_FAILURE } from '../constants/movieStoreConstants';

const INITIAL_STATE = {
  movieStore: {
  	error: null,
  	loading: false
  }
};

function createMovieStoreReducer (state = INITIAL_STATE, action) {
	let error;
	switch(action.type) {
	  case POST_MOVIE: // start fetching categories and set loading = true
  		return {
  		  ...state,
  		  movieStore: {error: null, loading: true}
  		};
	  case POST_MOVIE_SUCCESS: // return list of categories and make loading = false
	    return {
  		  ...state,
  		  movieStore: {error: null, loading: false}
  		};
	  case POST_MOVIE_FAILURE: // return error and make loading = false
		  // 2nd one is network or server down errors
	    error = action.payload || { message: action.payload.message };
	    return {
  		  ...state,
  		  movieStore: {error: error, loading: false}
  		};
	  default:
	    return state;
	}
}

export default createMovieStoreReducer;
