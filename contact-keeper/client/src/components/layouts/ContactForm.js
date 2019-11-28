import React , { useState , useEffect } from 'react';
//redux
import { connect } from "react-redux";
import { addContact , clearCurrent, updateContact} from "../../actions/contactsActions";


const ContactForm = ({addContact , current , clearCurrent , updateContact}) => {
  useEffect(() => {
    if(current !== null){
      setContact({
        id: current.id,
        name: current.name ,
        email: current.email ,
        phone: current.phone ,
        type: current.type
      }) 
    } else{
      setContact({
        name: '' ,
        email: '' ,
        phone: '' ,
        type: 'personal'
      });
    }
  }, 
  [current])
  
  const [ contact , setContact ] = useState({
    name: '' ,
    email: '' ,
    phone: '' ,
    type: 'personal'
  });
  const { name , email , phone , type } = contact;

  const handleChange = e => {
    setContact({
      ...contact ,
      [ e.target.name ] : e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    if(current === null){
      addContact(contact);
    }
    else{
      updateContact(contact);
      clearCurrent();
    }
    setContact({
      name: '' ,
      email: '' ,
      phone: '' ,
      type: 'personal'
    });
  }

  const clearAll = () => clearCurrent();
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-primary">{current ? 'Edit Contact' : 'Add Contact'}</h2>
      <input type="text" placeholder="Name" name="name" value={name} onChange={handleChange}/>
      <input type="email" placeholder="Email" name="email" value={email} onChange={handleChange}/>
      <input type="text" placeholder="Phone" name="phone" value={phone} onChange={handleChange}/>
      <h5>Contact type</h5>
      <input 
        type="radio" name="type" value="personal" 
        checked={type==='personal'}onChange={handleChange}
      />
        Personal
      <input 
        type="radio" name="type" value="professional" 
        checked={type === 'professional'}onChange={handleChange}
      />
        Professional
      <button type="submit" className="btn btn-primary btn-block">
        {current ? 'Edit Contact' : 'Add Contact'}
      </button>
      {current && (
          <button type="submit" className="btn btn-light btn-block" onClick={clearAll}>
            Clear All
          </button>
      )}
    </form>
  )
}

const mapStateToProps = state => ({
  current: state.contacts.current
})
export default connect(
  mapStateToProps,
  { addContact , clearCurrent , updateContact}
)(ContactForm);