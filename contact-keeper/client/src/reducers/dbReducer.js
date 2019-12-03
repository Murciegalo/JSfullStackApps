import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  CLEAR_ERRORS
} from '../actions/types';

const initState = {
  token: localStorage.getItem('token') ,
  isAuthenticated: null ,
  loading: true ,
  user: null ,
  error: null 
}

export default ( state=initState , action) => {
  switch (action.type) {
    case USER_LOADED:
      return {
        ...state , 
        isAuthenticated: true ,
        loading: false ,
        user: action.payload
      }
    case REGISTER_SUCCESS:
      localStorage.setItem('token' , action.payload.token)
      return {
        ...state,
        ...action.payload, 
        isAuthenticated: true,
        loading: false 
      }
    case REGISTER_FAIL:
    case AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null ,
        isAuthenticated: false ,
        loading: false ,
        user: null ,
        error: action.payload
      }
    case CLEAR_ERRORS:
      return {
        ...state ,
        error : null 
      }
    case LOGIN_SUCCESS:
      return {

      }
    case LOGIN_FAIL:
      return {

      }
    case LOGOUT:
      return {

      }
    default:
      return state;
  }
}