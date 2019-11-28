import {
  ADD_CONTACT ,
  DELETE_CONTACT,
  SET_CONTACT,
  CLEAR_CONTACT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from './types';


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