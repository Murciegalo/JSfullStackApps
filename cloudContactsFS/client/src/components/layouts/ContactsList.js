import React , { useEffect } from 'react';
import PropTypes from 'prop-types';
//redux
import { connect } from 'react-redux';
import { getContacts } from '../../actions/contactsActions';

//comp.
import  ContactItem  from './ContactItem';
//transtit.
import { CSSTransition , TransitionGroup } from 'react-transition-group';

const ContactsList = ({ list: { contactsList , filtered  } , db: { loading } , getContacts }) => {
  
  useEffect( () => {
    getContacts();
  }, //eslint-disable-next-line
  []);

  if(contactsList.length === 0 && loading !== false ){
    return <h3 style={{textAlign: 'center'}}>Please add a contact</h3>
  }
  return (
    <>
    <TransitionGroup>
    {
    filtered !== null ?
      filtered.map(el => (
        <CSSTransition key={el._id} className="item" timeout={600}> 
          <ContactItem data={el}/> 
        </CSSTransition> ))
      : 
      contactsList.map( el => (
        <CSSTransition key={el._id} className="item" timeout={600}> 
          <ContactItem data={el}/> 
        </CSSTransition> ))
    }
    </TransitionGroup> 
    </>
  )
}

ContactsList.propTypes = {
  list: PropTypes.object.isRequired,
}

const mapStateToProps = state => {
  return {
    list: state.contacts ,
    db: state.db
  }
}

export default connect(
  mapStateToProps,
  { getContacts }
)(ContactsList);
