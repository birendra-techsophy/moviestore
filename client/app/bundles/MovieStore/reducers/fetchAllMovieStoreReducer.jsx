import {
  GET_ALL_MOVIE,
  GET_ALL_MOVIE_SUCCESS,
  GET_ALL_MOVIE_FAILURE } from '../constants/movieStoreConstants';

const INITIAL_STATE = {
  movieStoreList: {
    movieList: [],
  	error: null,
  	loading: false
  }
};

function fetchAllMovieStoreReducer (state = INITIAL_STATE, action) {
	let error;
	switch(action.type) {
	  case GET_ALL_MOVIE: // start fetching categories and set loading = true
  		return {
  		  ...state,
  		  movieStoreList: {movieList: [], error: null, loading: true}
  		};
	  case GET_ALL_MOVIE_SUCCESS: // return list of categories and make loading = false
	    return {
  		  ...state,
  		  movieStoreList: {movieList: action.payload, error: null, loading: false}
  		};
	  case GET_ALL_MOVIE_FAILURE: // return error and make loading = false
		  // 2nd one is network or server down errors
	    error = action.payload || { message: action.payload.message };
	    return {
  		  ...state,
  		  movieStoreList: {movieList: [], error: error, loading: false}
  		};
	  default:
	    return state;
	}
}

export default fetchAllMovieStoreReducer;
