import { combineReducers } from "redux";
//reducer to be imported
import contactsReducer from './contactsReducer';
import dbReducer from './dbReducer';



export default combineReducers({
  contacts: contactsReducer ,
  db: dbReducer
});
