import React from 'react';
import PropTypes from 'prop-types';
//redux
import { connect } from 'react-redux';
//comp.
import  ContactItem  from './ContactItem';

const ContactsList = ({ list: { contactsList , filtered }}) => {
  
  if(contactsList.length === 0){
    return <h3 style={{textAlign: 'center'}}>Please add a contact</h3>
  }
  return (
    <>
    {
    filtered !== null ?
      filtered.map(el => ( <ContactItem key={el.id} data={el}/> ))
      : 
      contactsList.map( el => ( <ContactItem key={el.id} data={el}/> ))
    }
    </>
  )
}

ContactsList.propTypes = {
  list: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  list: state.contacts
})

export default connect(
  mapStateToProps,
  null
)(ContactsList);
