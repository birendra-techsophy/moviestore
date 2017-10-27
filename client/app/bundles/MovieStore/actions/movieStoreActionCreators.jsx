/* eslint-disable import/prefer-default-export */

//import { HELLO_WORLD_NAME_UPDATE } from '../constants/movieStoreConstants';

import {
  POST_MOVIE_LOADING,
  POST_MOVIE_SUCCESS,
  POST_MOVIE_FAILURE } from '../constants/movieStoreConstants';

import callApi from './../services/call.api';

// Define the corresponding action creator, must return an object
export function loadingCreateMovie() {
  return {
    type: POST_MOVIE_LOADING
  };
}

export function createMovieStoreSuccess() {
  return {
    type: POST_MOVIE_SUCCESS
  };
}

export function createMovieStoreFailure(error) {
  return {
    type: POST_MOVIE_FAILURE,
    payload: error
  };
}

export function createMovieStore(movieDetails) {
  return (dispatch) => {
    return callApi('movie_stores', 'post', movieDetails, (error) => {
  	  if (error) {
        dispatch(createMovieStoreFailure(error));
  	  } else {
        dispatch(createMovieStoreSuccess());
  	  }
  	});
  };
}
