import React from 'react';
import PropTypes from 'prop-types';
//redux
import { connect } from 'react-redux';
//comp.
import  ContactItem  from './ContactItem';
//transtit.
import { CSSTransition , TransitionGroup } from 'react-transition-group';

const ContactsList = ({ list: { contactsList , filtered }}) => {
  
  if(contactsList.length === 0){
    return <h3 style={{textAlign: 'center'}}>Please add a contact</h3>
  }
  return (
    <>
    <TransitionGroup>
    {
    filtered !== null ?
      filtered.map(el => (
        <CSSTransition key={el.id} className="item" timeout={600}> 
          <ContactItem data={el}/> 
        </CSSTransition> ))
      : 
      contactsList.map( el => (
        <CSSTransition key={el.id} className="item" timeout={600}> 
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

const mapStateToProps = state => ({
  list: state.contacts
})

export default connect(
  mapStateToProps,
  null
)(ContactsList);
