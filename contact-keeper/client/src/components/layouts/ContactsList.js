import React from 'react';
import PropTypes from 'prop-types';
//redux
import { connect } from 'react-redux';
//comp.
import { ContactItem as Item } from './ContactItem';

const ContactsList = ({ list: { contactsList }}) => {
  return (
    <>
    {
      contactsList.map( el => ( <Item key={el.id} data={el}/> ))
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
