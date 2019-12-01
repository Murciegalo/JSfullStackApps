import {
  ADD_CONTACT ,
  DELETE_CONTACT,
  SET_CONTACT,
  CLEAR_CONTACT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  SET_ALERT ,
  REMOVE_ALERT
} from '../actions/types';

const initState = {
  contactsList: [
    { id: 1 , name: 'Stuart' , surname: 'CaraOso' },
    { id: 2 , name: 'Tomate' , surname: 'CaraOso' },
    { id: 3 , name: 'Caliente' , surname: 'CaraOso' }
  ] ,
  current: null ,
  filtered: null ,
  alerts: []
}

export default ( state=initState , action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state ,
        contactsList: [ ...state.contactsList , action.payload ]
      }
    case DELETE_CONTACT:
      return {
        ...state ,
        contactsList: state.contactsList.filter(el => el.id !== action.payload)
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
          if(el.id === action.payload.id){
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

