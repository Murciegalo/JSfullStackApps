import React from 'react';
import ContactsList from '../layouts/ContactsList.js';
import ContactForm  from "../layouts/ContactForm";
const Home = () => {
  return (
    <div className="grid-2">
        <ContactForm />
      <div className="contacts">
        <ContactsList />
      </div>
      
    </div>
  )
}



export default Home;