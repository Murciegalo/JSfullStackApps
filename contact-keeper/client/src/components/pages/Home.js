import React from 'react';
import ContactsList from '../layouts/ContactsList.js';

const Home = () => {
  return (
    <div className="grid-2">
      {/* FORM */}
      <div className="contacts">
        <ContactsList />
      </div>
      
    </div>
  )
}



export default Home;