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
router.post( 
  '/' , 
  [ auth ,
    [  
      check( 'name' , 'Please , input the name' ).not().isEmpty()
    ] 
  ] , 
  async ( req , res ) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name , email , phone , type  } = req.body;

    try {
      const nueContact = new Contact({
        name,
        email,
        phone,
        type , 
        user: req.user.id
      });
      
      const contact = await nueContact.save();
      res.json(contact);
    } 
    catch (error) {
      console.log(error.message)
      res.status(500).send('Server error');
    }
});




//  @route        Update api/users
//  Update users in storage   Private 
router.put( 
  '/:id' , 
  auth, 
  async ( req , res ) => {
    const { name , email , phone , type } = req.body;

    //Update Obj Edited Contact
    const contactFields = {};
    name ? contactFields.name = name :
    email? contactFields.email = email : 
    phone? contactFields.phone = phone :
    type? contactFields.type = type: '';

    try {
      let contact = await Contact.findById(req.params.id);

      if(!contact) return res.status(404).json({ msg: "Not found" });

      //User own this contact? 
      if(contact.user.toString() !== req.user.id){
        return res.status(401).json({ msg: 'Not authorized'});
      } 
        
      contact = await Contact.findByIdAndUpdate(req.params.id , { $set: contactFields } , { new: true });

      res.json(contact);
    } 
    catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "Server Error.."});
    }
});




//   @route       Delete api/users
//   Delete users in storage   Private
router.delete( 
  '/:id' , 
  auth,  
  async ( req , res ) => {
    try {
      let contact = await Contact.findById(req.params.id);
      
      if(!contact) return res.status(404).json({ msg: "Not found" });

      //User own this contact? 
      if(contact.user.toString() !== req.user.id){
        return res.status(401).json({ msg: 'Not authorized'});
      } 
        
      await Contact.findByIdAndRemove(req.params.id);
      res.json({ msg: "Contact Removed"});
    } 
    catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: "Server Error.."});
    }
});


module.exports = router;