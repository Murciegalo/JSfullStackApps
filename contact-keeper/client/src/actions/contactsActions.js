import {
  GET_CONTACTS,
  ADD_CONTACT ,
  DELETE_CONTACT,
  SET_CONTACT,
  CLEAR_CONTACT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_ALERT,
  REMOVE_ALERT,
  CONTACT_ERROR,
  CLEAR_CONTACTS
} from './types';
import uuid from 'uuid';
import axios from 'axios';

// GET CONTACTS
export const getContacts = () => async dispatch => {
  try {
    const post = await axios.get('http://localhost:5000/api/contacts');
    dispatch({
      type: GET_CONTACTS ,
      payload: post.data
    });  
  } 
  catch (error) {
    dispatch({
      type: CONTACT_ERROR ,
      payload: error.response.data.msg
    });
  }
}

// ADD CONTACTS
export const addContact = (data) => async dispatch => {
  console.log('ContactSubmit' , data)
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const post = await axios.post('http://localhost:5000/api/contacts' , data , config );
    dispatch({
      type: ADD_CONTACT ,
      payload: post.data
    });  
  } 
  catch (error) {
    dispatch({
      type: CONTACT_ERROR ,
      payload: error.response.data.msg
    });
  }
}

export const deleteContact = (id) => async dispatch => {
  try {
    axios.delete(`http://localhost:5000/api/contacts/${id}`);
    dispatch({
      type: DELETE_CONTACT ,
      payload: id
    })  
  } 
  catch (error) {
    dispatch({
      type: CONTACT_ERROR ,
      payload: error.response.msg
    })
  }
}
// EDIT 
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

export const updateContact = (curr) => async dispatch => {
  console.log(curr._id);
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  try {
    const upd = await axios.put(`http://localhost:5000/api/contacts/${curr._id}` , curr , config );
    dispatch({
      type: UPDATE_CONTACT ,
      payload: upd.data
    })
  } 
  catch (error) {
    dispatch({
      type: CONTACT_ERROR ,
      payload: error.response.data.msg
    })
  }
}
//

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

export const clearContacts = () => {
  return {
    type: CLEAR_CONTACTS
  }
}