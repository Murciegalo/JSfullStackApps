const express = require('express');
const router = express.Router();

// @route     GET users logged in  
// private access 
router.get( '/' , ( req , res ) => {
  res.send('Get logged in an user');
});

// @route   Auth User & get token
// public access
router.post( '/' , ( req , res ) => {
  res.send('Log in user');
});

module.exports = router;