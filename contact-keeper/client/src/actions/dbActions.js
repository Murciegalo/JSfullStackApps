import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS,
  AUTH_ERROR
} from './types';
import axios from 'axios';
import { setAuthToken } from '../utils/setAuthToken';


// LOAD USER
export const loadUser = () => async dispatch => {
  //load token into headers req
  if(localStorage.token){
    // 1. put it in the header => GET req
    setAuthToken(localStorage.token)
  }
  try {
    // 2.
    const res = await axios.get('http://localhost:5000/api/auth');
    dispatch({
      type: USER_LOADED,
      payload: res.data
    }); 
  } 
  catch (error) {
    dispatch({ type: AUTH_ERROR })
  }
}

export const register = ( formData ) => async dispatch => {
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const res = await axios.post( 'http://localhost:5000/api/users' , formData , config )
    dispatch({
      type: REGISTER_SUCCESS ,
      payload: res.data ,
    }) 
  } 
  catch (error) {
    console.log(error)
    dispatch({
      type: REGISTER_FAIL ,
      payload: error.response.data.msg
    })
  }
}

// LOGIN USER
export const authUser = (error) => {
  return {
    type: AUTH_ERROR ,
    action: error
  }
}

export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS ,
    action: token
  }
}

export const loginFail = (error) => {
  return {
    type: LOGIN_FAIL ,
    action: error
  }
}


// LOGOUT

export const logUserOut = () => {
  return {
    type: LOGOUT 
  }
}

// CLEAR ERRORS 

export const clearErrors = () => async dispatch => {
  dispatch({
    type: CLEAR_ERRORS
  });
}
