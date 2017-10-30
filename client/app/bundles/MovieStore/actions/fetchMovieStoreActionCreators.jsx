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

export function fetchMovieStores(page, limit) {
  console.log('----fetchMovieStores--', page, ' / ', limit);
  limit = limit * page - 1;
  page = limit * page - limit;
  return (dispatch) => {
    console.log('---1----');
    return callApi('movie_stores', 'get', {page: page, limit: limit}, (error, movieDetails) => {
      console.log('-----2---');
      if (error) {
        dispatch(fetchMovieStoreFailure(error));
  	  } else {
        dispatch(fetchMovieStoreSuccess(movieDetails));
  	  }
  	});
  };
}
