import {
  DELETE_MOVIE_LOADING,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAILURE } from '../constants/movieStoreConstants';

const INITIAL_STATE = {
	error: null,
	loading: false
};

function deleteMovieStoreReducer (state = INITIAL_STATE, action) {
	let error;
	switch(action.type) {
	  case DELETE_MOVIE_LOADING: // start fetching categories and set loading = true
  		return {
  		  ...state,
  		  loading: true
  		};
	  case DELETE_MOVIE_SUCCESS: // return list of categories and make loading = false
	    return {
  		  ...state,
  		  loading: false
  		};
	  case DELETE_MOVIE_FAILURE: // return error and make loading = false
		  // 2nd one is network or server down errors
	    error = action.payload || { message: action.payload.message };
	    return {
  		  ...state,
  		  error: error,
        loading: false
  		};
	  default:
	    return state;
	}
}

export default deleteMovieStoreReducer;
