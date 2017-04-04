/*
 *
 * HomePage actions
 *
 */

import {
  FETCH_CONTENT,
  POPULATE_CONTENT,
  SET_FETCHING,
  REMOVE_FETCHING,
} from './constants';

export function fetchContent(){
  return {
    type: FETCH_CONTENT,
  }
};

export function populateContent(payload) {
  return {
    type: POPULATE_CONTENT,
    payload
  }
};

export function setFetching(){
  return {
    type: SET_FETCHING,
  }
};

export function removeFetching(){
  return {
    type: REMOVE_FETCHING,
  }
};
