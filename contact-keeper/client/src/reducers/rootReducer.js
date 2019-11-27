import { combineReducers } from "redux";
//reducer to be imported
import contactsReducer from './contactsReducer';




export default combineReducers({
  contacts: contactsReducer
});
