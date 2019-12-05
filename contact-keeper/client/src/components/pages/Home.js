import React , { useEffect } from 'react';
import ContactsList from '../layouts/ContactsList.js';
import ContactForm  from "../layouts/ContactForm";
import Filter from '../layouts/Filter';
//redux
import { connect } from 'react-redux';
import { loadUser } from '../../actions/dbActions';


const Home = ({ contacts , loadUser }) => {
  useEffect(() => {
    loadUser();
  },
  // eslint-disable-next-line 
  []);
  
  return (
    <div className="grid-2">
        <ContactForm />
      <div className="contacts">
        {
          contacts.length === 0 ? '' : <Filter /> 
        }
        <ContactsList />
      </div>
      
    </div>
  )
}


const mapStateToProps = state => {
  return {
    contacts: state.contacts.contactsList
  }
}
export default connect(
  mapStateToProps ,
  { loadUser }
)(Home);