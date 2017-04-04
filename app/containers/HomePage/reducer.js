/*
 *
 * HomePage reducer
 *
 */

import { fromJS, List } from 'immutable';
import {
  POPULATE_CONTENT,
  SET_FETCHING,
  REMOVE_FETCHING,
} from './constants';

const initialState = fromJS({
  content: [],
  isFetching: false,
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case POPULATE_CONTENT:
      return state.set('content', List(action.payload));
    case SET_FETCHING:
      return state.set('isFetching', true);
    case REMOVE_FETCHING:
      return state.set('isFetching', false);
    default:
      return state;
  }
}

export default homePageReducer;
