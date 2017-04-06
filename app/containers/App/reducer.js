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
    SET_ERROR,
    REMOVE_ERROR,
    SET_USERNAME,
    SET_PASSWORD,
    REMOVE_USERNAME,
    REMOVE_PASSWORD,
} from './constants';

// The initial state of the App
const initialState = fromJS({
    username: '',
    password: '',
    token: null,
    error: null,
});

function appReducer(state = initialState, action) {
    switch (action.type) {
        case SET_USERNAME:
            return state.set('username', action.username);
        case REMOVE_USERNAME:
            return state.set('username', '');
        case SET_PASSWORD:
            return state.set('password', action.password);
        case REMOVE_PASSWORD:
            return state.set('password', '');
        case SET_TOKEN:
            return state.set('token', action.token);
        case REMOVE_TOKEN:
            return state.set('token', null);
        case SET_ERROR:
            return state.set('error', action.error);
        case REMOVE_ERROR:
            return state.set('error', null);
        default:
            return state;
    }
}

export default appReducer;
