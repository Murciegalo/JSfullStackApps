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


// LOAD USER
export const userLoad = (user) => {
  return {
    type: USER_LOADED ,
    action: user
  }
}

// REGISTER USER
export const registSuccess = (tokenData) => {
  return {
    type: REGISTER_SUCCESS ,
    action: tokenData
  }
}

export const registFail = (error) => {
  return {
    type: REGISTER_FAIL ,
    action: error
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

export const clearErrors = () => {
  return {
    type: CLEAR_ERRORS
  }
}