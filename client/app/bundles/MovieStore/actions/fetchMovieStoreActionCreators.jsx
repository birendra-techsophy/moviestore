/* eslint-disable import/prefer-default-export */

//import { HELLO_WORLD_NAME_UPDATE } from '../constants/movieStoreConstants';

import {
  GET_ALL_MOVIE_LOADING,
  GET_ALL_MOVIE_SUCCESS,
  GET_ALL_MOVIE_FAILURE } from '../constants/movieStoreConstants';

import callApi from './../services/call.api';

// Define the corresponding action creator, must return an object
export function loadingMovieStores() {
  return {
    type: GET_ALL_MOVIE_LOADING
  };
}

export function fetchMovieStoreSuccess(movieDetails) {
  return {
    type: GET_ALL_MOVIE_SUCCESS,
    payload: movieDetails
  };
}

export function fetchMovieStoreFailure(error) {
  return {
    type: GET_ALL_MOVIE_FAILURE,
    payload: error
  };
}

export function fetchMovieStores() {
  return (dispatch) => {
    return callApi('movie_stores', 'get', {}, (error, movieDetails) => {
      if (error) {
        dispatch(fetchMovieStoreFailure(error));
  	  } else {
        dispatch(fetchMovieStoreSuccess(movieDetails));
  	  }
  	});
  };
}
