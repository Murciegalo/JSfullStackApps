const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check , validationResult } = require('express-validator');

const User = require('../models/User');
const Contact = require('../models/Contact');


//  @route                   Get api/contacts
//  Get all user contacts    Private access
router.get( 
  '/' , 
  auth , 
  async ( req , res ) => {
    try {
      const contacts = await Contact.find({ user: req.user.id }).sort({ date: -1 });
      res.json(contacts);
    } 
    catch (error) {
      console.log(error.message);
      res.status(500).send({ msg: 'Server error..'});
    }
  }
);




//  @route          Post api/users
//  Add Users      Private access
router.post( '/' , auth , ( req , res ) => {
  res.send('Add new contact')
});




//  @route        Update api/users
//  Update users in storage  
router.put( '/:id' , ( req , res ) => {
  res.send('Update contact ')
});




//   @route       Delete api/users
//   Delete users in storage 
router.delete( '/:id' , ( req , res ) => {
  res.send('delete contact')
});




module.exports = router;