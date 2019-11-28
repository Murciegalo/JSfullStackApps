import React , { useRef , useEffect } from 'react';
//redux
import { connect } from 'react-redux';
import { filterContacts, clearFilter } from '../../actions/contactsActions';


const Filter = ({filt , filterContacts , clearFilter }) => {
  const text = useRef('');
  useEffect(() => {
    if(filt === null){
      text.current.value = '';
    }
  })

  const handleChange = (e) => {
    if( text.current.value !== ''){
      filterContacts(e.target.value);
    }
    else{
      clearFilter();
    }
  }
  return (
    <form>
      <input ref={text} type="text" placeholder="Filter contacts.." onChange={handleChange}/>
    </form>
  )
}

const mapStateToPros = state => {
  return {
    filt: state.contacts.filtered
  }
}

export default connect(
  mapStateToPros,
  { filterContacts , clearFilter }
)(Filter);