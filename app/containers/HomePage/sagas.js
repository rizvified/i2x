import { take, call, put, cancel, select, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';

import {
  FETCH_CONTENT,
  POPULATE_CONTENT
  } from './constants';

import { API_CONTENT } from 'containers/App/constants';
import { makeSelectContacts } from './selectors';

import request from 'utils/request';


function* contentLoad() {
    let ahsan, payload = null;
    let token = localStorage.token;
    const requestURL = API_CONTENT;
    const requestObj = {
      method: 'GET',
      headers: new Headers({
        'Authorization': `JWT ${token}`
      })
    };

    try {
      ahsan = yield call(request, requestURL, requestObj);
    }
    catch(err) {
      console.log(err);
    }
    finally {
      if(ahsan.results) {
        payload = ahsan.results;
        console.log(payload);;
        yield put({ type: POPULATE_CONTENT, payload });
      }
    }
};

export function* defaultSaga() {
  const fetcher = yield takeLatest(FETCH_CONTENT, contentLoad);
}

export default [
  defaultSaga,
];
