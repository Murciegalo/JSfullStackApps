import {
  GET_CONTACTS,
  ADD_CONTACT ,
  DELETE_CONTACT,
  SET_CONTACT,
  CLEAR_CONTACT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_ALERT ,
  REMOVE_ALERT ,
  CONTACT_ERROR,
  CLEAR_CONTACTS
} from '../actions/types';

const initState = {
  contactsList: [] ,
  current: null ,
  filtered: null ,
  alerts: [] ,
  error: null
}

export default ( state=initState , action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state ,
        contactsList: action.payload 
      }
    case ADD_CONTACT:
      return {
        ...state ,
        contactsList: [ action.payload , ...state.contactsList ] 
      }
    case CONTACT_ERROR:
      return {
        ...state ,
        error: action.payload
      }
    case DELETE_CONTACT:
      return {
        ...state ,
        contactsList: state.contactsList.filter(el => el._id !== action.payload)
      }
    case SET_CONTACT:
      return {
        ...state ,
        current: action.payload
      }
    case CLEAR_CONTACT:
      return {
        ...state ,
        current: null
      }
    case UPDATE_CONTACT:
      return {
        ...state ,
        contactsList: state.contactsList.map(el => {
          if(el._id === action.payload._id){
            return action.payload
          }else{
            return el;
          }
        })
      }
    case FILTER_CONTACTS:
      return {
        ...state,
        filtered: state.contactsList.filter(el => {
          const regExp = new RegExp(`${action.payload}` , 'gi');
          return el.name.match(regExp);
        })
      }
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      }
    case CLEAR_CONTACTS:
      return {
        ...state,
        contactsList: [],
        filtered: null ,
        error: null ,
        current: null
      }
    case SET_ALERT:
      return {
        ...state ,
        alerts: [ ...state.alerts , action.payload ]
      }
    case REMOVE_ALERT:
      return {
        ...state ,
        alerts: state.alerts.filter( el => el.id !== action.payload )
      }
    default:
      return state;
  }
}

