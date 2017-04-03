/*
 *
 * HomePage actions
 *
 */

import {
  FETCH_CONTENT,
  POPULATE_CONTENT,
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
