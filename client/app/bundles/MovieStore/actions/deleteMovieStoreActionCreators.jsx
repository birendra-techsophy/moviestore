/* eslint-disable import/prefer-default-export */

//import { HELLO_WORLD_NAME_UPDATE } from '../constants/movieStoreConstants';

import {
  DELETE_MOVIE_LOADING,
  DELETE_MOVIE_SUCCESS,
  DELETE_MOVIE_FAILURE } from '../constants/movieStoreConstants';

import callApi from './../services/call.api';

// Define the corresponding action creator, must return an object
export function loading() {
  return {
    type: DELETE_MOVIE_LOADING
  };
}

export function deleteMovieStoreSuccess() {
  return {
    type: DELETE_MOVIE_SUCCESS
  };
}

export function deleteMovieStoreFailure(error) {
  return {
    type: DELETE_MOVIE_FAILURE,
    payload: error
  };
}

export function deleteMovieStores(movieStoreId) {
  return (dispatch) => {
    return callApi(`movie_stores/${movieStoreId}`, 'delete', {}, (error) => {
      if (error) {
        dispatch(deleteMovieStoreFailure(error));
  	  } else {
        dispatch(deleteMovieStoreSuccess());
  	  }
  	});
  };
}
