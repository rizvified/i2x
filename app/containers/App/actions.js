
import {
  LOG_IN,
  LOG_OUT,
  SET_TOKEN,
  REMOVE_TOKEN,
  SET_ERROR,
  REMOVE_ERROR,
} from './constants';

export function logIn(username, password){
  return {
    type: LOG_IN,
    username,
    password
  }
};

export function logOut(){
  return {
    type: LOG_OUT,
  }
};

export function setToken(token){
  return {
    type: SET_TOKEN,
    token
  }
};


export function removeToken(){
  return {
    type: REMOVE_TOKEN,
  }
};

export function setError(error){
  return {
    type: SET_ERROR,
    error
  }
};


export function removeError(){
  return {
    type: REMOVE_ERROR,
  }
};
