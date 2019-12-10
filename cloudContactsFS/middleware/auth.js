//Access to the Req & Res cycle
const jwt = require('jsonwebtoken');
const config = require('config');

//  Middleware f()
module.exports = function(req , res , next){
  //Get token
  const token = req.header('x-auth-token');

  if(!token){
    return res.status(401).json({ msg: "No token , authorization denied"});
  }
  try {
    // verified ?  <== payload
    const decoded = jwt.verify( token , config.get('jwtSecret'));  
    req.user = decoded.user;
    next();
  } 
  catch (error) {
    res.status(401).json({ msg: "Token not valid"});
  }
}
