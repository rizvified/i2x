
import {
  LOG_IN,
  LOG_OUT,
  SET_TOKEN,
  REMOVE_TOKEN,
  SET_ERROR,
  REMOVE_ERROR,
  SET_USERNAME,
  REMOVE_USERNAME,
  SET_PASSWORD,
  REMOVE_PASSWORD,
} from './constants';

export function logIn(){
  return {
    type: LOG_IN,
  }
};

export function logOut(){
  return {
    type: LOG_OUT,
  }
};

export function setUsername(username){
  return {
    type: SET_USERNAME,
    username,
  }
};


export function removeUsername(){
  return {
    type: REMOVE_USERNAME,
  }
};

export function setPassword(password){
  return {
    type: SET_PASSWORD,
    password,
  }
};


export function removePassword(){
  return {
    type: REMOVE_PASSWORD,
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
