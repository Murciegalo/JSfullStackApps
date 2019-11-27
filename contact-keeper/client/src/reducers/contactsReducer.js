import {
  ADD_CONTACT ,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CONTACT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER
} from '../actions/types';

const initState = {
  contactsList: [
    { id: 1 , name: 'Stuart' , surname: 'CaraOso' },
    { id: 2 , name: 'Tomate' , surname: 'CaraOso' },
    { id: 3 , name: 'Caliente' , surname: 'CaraOso' }
  ] ,
  alert: false
}

export default ( state=initState , action) => {
  switch (action.type) {
    case ADD_CONTACT:
      return {
        ...state ,
        contacts: [ ...state.contacts , action.payload ]
      }
    default:
      return state;
  }
}

