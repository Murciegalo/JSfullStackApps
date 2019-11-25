//Router
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
//Model
const User = require('../models/User');


// @route     POST api/users 
// public access
router.post( 
  '/' , 
  [ 
    check( 'name' , 'Please add your name' )
    .not()
    .isEmpty() ,
    check( 'email' , 'Please add a valid email' ).isEmail(),
    check( 
      'password' , 
      'Please enter a password with 6 or more characters' 
    ).isLength({ min: 6})
  ],  
  async ( req , res ) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //Get data
    const { name , email , password } = req.body;
    
    try {
      let user = await User.findOne({ email }); 

      if(user) {
        return res.status(400).json({ msg: 'User already exists' })
      }
      user = new User({
        name ,
        email ,
        password
      });

      //Encrypt
      const salt =  await bcrypt.genSalt(10);
      user.password = await bcrypt.hash( password , salt );
      await user.save();

      jwt.sign(
        {
          user: {
            id: user.id
          }
        }, 
        config.get('jwtSecret') , 
        {
        expiresIn: 36000
        }, 
        ( error , token) => {
          if(error) throw error;
          res.json({token})
        }
      );
    } 
    catch (error) {
      console.log(error.message);
      res.status(500).send('Server error..');
    }
});



module.exports = router;