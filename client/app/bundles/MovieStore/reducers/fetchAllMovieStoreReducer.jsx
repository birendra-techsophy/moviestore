import {
  GET_ALL_MOVIE_LOADING,
  GET_ALL_MOVIE_SUCCESS,
  GET_ALL_MOVIE_FAILURE } from '../constants/movieStoreConstants';

const INITIAL_STATE = {
    movieList: [],
    totalRecord: 0,
  	error: null,
  	loading: false
};

function fetchAllMovieStoreReducer (state = INITIAL_STATE, action) {
	let error;
	switch(action.type) {
	  case GET_ALL_MOVIE_LOADING: // start fetching categories and set loading = true
  		return {
  		  ...state,
  		  loading: true
  		};
	  case GET_ALL_MOVIE_SUCCESS: // return list of categories and make loading = false
	    return {
  		  ...state,
  		  movieList: action.payload.movies,
        totalRecord: action.payload.totalRecord,
        loading: false
  		};
	  case GET_ALL_MOVIE_FAILURE: // return error and make loading = false
		  // 2nd one is network or server down errors
	    error = action.payload || { message: action.payload.message };
	    return {
  		  ...state,
        error: error
  		};
	  default:
	    return state;
	}
}

export default fetchAllMovieStoreReducer;
