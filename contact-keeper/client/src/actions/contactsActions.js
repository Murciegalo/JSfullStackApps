import {
  ADD_CONTACT ,
  DELETE_CONTACT,
  SET_CONTACT,
  CLEAR_CONTACT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT
} from './types';
import uuid from 'uuid';

export const addContact = (data) => {
  return {
    type: ADD_CONTACT , 
    payload: data
  };
}

export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACT ,
    payload: id
  }
}

export const setCurrent = data => {
  return {
    type: SET_CONTACT ,
    payload: data
  }
}

export const clearCurrent = () => {
  return {
    type: CLEAR_CONTACT 
  }
}

export const updateContact = (curr) => {
  console.log('UPDATECONTACT', curr);
  return {
    type: UPDATE_CONTACT ,
    payload: curr
  }
}

export const filterContacts = (txt) => {
  return {
    type: FILTER_CONTACTS ,
    payload: txt
  }
}

export const clearFilter = () => {
  return {
    type: CLEAR_FILTER 
  }
}

export const setAlert = (message) => async dispatch => {
  let id;
  id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { id , msg: message , tipo: 'danger'}
  })
  setTimeout( () => dispatch({ type: REMOVE_ALERT , payload: id}), 2500);
}