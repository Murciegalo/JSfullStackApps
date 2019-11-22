const express = require('express');
const router = express.Router();

// @route     POST api/users 
// public access
router.post( '/' , ( req , res ) => {
  res.send('regiter an user')
});



module.exports = router;