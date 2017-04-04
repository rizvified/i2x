import { call, take, put, select, fork } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  FETCH_CONTENT,
  POPULATE_CONTENT,
  REQUEST_SENT,
  SET_FETCHING,
  REMOVE_FETCHING,
  } from './constants';

import { API_CONTENT } from 'containers/App/constants';
import { makeSelectToken } from 'containers/App/selectors';

import request from 'utils/request';


let reply, payload = null;

export function* contentLoad() {
    yield take(FETCH_CONTENT)

    const token = yield select(makeSelectToken());
    const requestURL = API_CONTENT;
    const requestObj = {
      method: 'GET',
      headers: new Headers({
        'Authorization': `JWT ${token}`
      })
    };

    try {
      yield put({ type: SET_FETCHING });
      reply = yield call(request, requestURL, requestObj);
    }
    catch(err) {
      console.log(err);
    }
    finally {
      if(reply.results.length > 0) {
        yield put({ type: REMOVE_FETCHING });
        payload = reply.results;
        yield put({ type: POPULATE_CONTENT, payload });
      } else {
        console.log("No data from API");
      }
    }
};

export function* defaultSaga() {
  yield fork(contentLoad);
}

export default [
  defaultSaga,
];
