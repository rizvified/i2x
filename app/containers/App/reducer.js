/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import {
    fromJS
} from 'immutable';

import {
    SET_TOKEN,
    REMOVE_TOKEN,
} from './constants';

// The initial state of the App
const initialState = fromJS({
    token: null,
});

function appReducer(state = initialState, action) {
    switch (action.type) {
        case SET_TOKEN:
            return state.set('token', action.token);
        case REMOVE_TOKEN:
            return state.set('token', null);
        default:
            return state;
    }
}

export default appReducer;
