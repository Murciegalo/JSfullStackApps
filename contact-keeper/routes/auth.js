const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
//Model
const User = require('../models/User');
// bring Middleware to protect Get user logged in route 
const auth = require('../middleware/auth');


// 2.   @route     GET users logged in  
//      private access 
router.get( '/' , auth , async ( req , res ) => {
  try {             
    // <==
    const user = await User.findById(req.user.id).select('-password');
    res.json({user});
  } 
  catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');  
  }
});




// 1.  @route   Auth User & get token
//     public access
router.post( 
  '/' , 
  [
    check('email' , 'Please introduce a valid email').isEmail(),
    check('password' , 'Password is required' ).exists()
  ],
  async ( req , res ) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) 
    {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email , password } = req.body;

    try {
      let user = await User.findOne({ email });
      if(!user) {
        return res.status(400).json({ msg: 'Invalid Credentials'})
      }

      const isMatch = await bcrypt.compare( password , user.password );
      if(!isMatch) {
        return res.status(400).json({ msg: 'Invalid password'})
      }

      //All data from user matchs on Login => token
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
          //token
          res.json({token})
        }
      );
    } 
    catch (error) {
      console.log(error.message);
      res.status(500).json({ msg: 'Server Error..'}); 
    }
  });



module.exports = router;
