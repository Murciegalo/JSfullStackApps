import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  CLEAR_ERRORS,
  LOGOUT
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
    dispatch({ 
      type: AUTH_ERROR ,
      payload: error.response.data.msg
    })
  }
}

export const register = formData => async dispatch => {
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
    dispatch({
      type: REGISTER_FAIL ,
      payload: error.response.data.msg
    })
  }
}

// LOGIN

export const login = formData => async dispatch => {
  console.log(formData)
  try {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
    const res = await axios.post( 'http://localhost:5000/api/auth' , formData , config );
    dispatch({
      type: LOGIN_SUCCESS ,
      payload: res.data ,
    }) 
  } 
  catch (error) {
    dispatch({
      type: LOGIN_FAIL ,
      payload: error.response.data.msg
    })
  }
}

// LOG OUT USER

export const logOut = () => async dispatch => {
  dispatch({
    type: LOGOUT
  });
}
// CLEAR ERRORS 

export const clearErrors = () => async dispatch => {
  dispatch({
    type: CLEAR_ERRORS
  });
}
