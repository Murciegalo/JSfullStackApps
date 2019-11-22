const express = require('express');
const router = express.Router();

// @route     Get api/contacts
// Get all user contacts  // Private access
router.get( '/' , ( req , res ) => {
  res.send('Get all contacts')
});

// @route     Post api/users
// Add Users   // Private access
router.post( '/' , ( req , res ) => {
  res.send('Add new contact')
});

// @route     Update api/users
// Update users in storage  
router.put( '/:id' , ( req , res ) => {
  res.send('Update contact ')
});

// @route     Delete api/users
// Delete users in storage 
router.delete( '/:id' , ( req , res ) => {
  res.send('delete contact')
});




module.exports = router;