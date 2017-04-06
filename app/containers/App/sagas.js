import {
  call,
  take,
  put,
  fork,
  select,
  race,
} from 'redux-saga/effects';

import {
  LOG_IN,
  LOG_OUT,
  GET_CONTENT,
  SET_TOKEN,
  REMOVE_TOKEN,
  SET_ERROR,
  REMOVE_ERROR,
  REMOVE_PASSWORD,
  REMOVE_USERNAME,
} from './constants';

import { API_LOGIN } from './constants';
import { makeSelectUsername, makeSelectPassword } from './selectors';

import { LOCATION_CHANGE } from 'react-router-redux';
import { push } from 'react-router-redux';

import request from 'utils/request';


export function* loginFlow () {

  while (true) {
    const data = yield take(LOG_IN);
    const username = yield select(makeSelectUsername());
    console.log(username);
    const password = yield select(makeSelectPassword());
    console.log(password);
    const requestURL = API_LOGIN;
    const requestObj = {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify({
          "email": username,
          "password": password,
        })
    };
    let token, error = null;

    let winner = yield race({
      auth: call(request, requestURL, requestObj),
      logout: take(LOG_OUT)
    })

    if (winner.auth) {
      if (winner.auth.token) {
        yield put({ type: REMOVE_ERROR });
        token = winner.auth.token;
        localStorage.setItem('token', token);
        yield put({ type: SET_TOKEN, token });
        yield put(push('/home'));
        yield put({ type: REMOVE_USERNAME });
        yield put({ type: REMOVE_PASSWORD });
      }
      else if (winner.auth.non_field_errors){
        error = winner.auth.non_field_errors;
        yield put({ type: SET_ERROR, error });
      }

    } else if (winner.logout) {
        yield call(logOut)
        yield put(push('/'));
    }
  }
}


export function * logoutFlow () {
  while (true) {
    yield take(LOG_OUT)
    localStorage.removeItem('token');
    yield put({ type: REMOVE_TOKEN });
    yield put(push('/'));
  }
}

export function* appWatcher() {
  yield fork(loginFlow);
  yield fork(logoutFlow);
}

export default [
  appWatcher,
];
