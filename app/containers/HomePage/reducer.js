/*
 *
 * HomePage reducer
 *
 */

import { fromJS, List } from 'immutable';
import {
  POPULATE_CONTENT,
} from './constants';

const initialState = fromJS({
  content: []
});

function homePageReducer(state = initialState, action) {
  switch (action.type) {
    case POPULATE_CONTENT:
      return state.set('content', List(action.payload));
    default:
      return state;
  }
}

export default homePageReducer;
