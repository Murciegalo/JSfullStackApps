const express = require('express');
const connectDB = require('./config/db');
// 1. Server
const app = express();
// Middleware
app.use(express.json());
const PORT = process.env.PORT || 5000;
// 2. DB
connectDB();

// homepage 
app.get('/' , (req , res) => res.send({
  msg: 'Welcome to encrypted and secret contacts storage'
}));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header("Access-Control-Allow-Headers", "Origin , Content-Type , Authorization, x-id , Content-Length , X-Requested-With , x-auth-token");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

// EndPoints
app.use( '/api/users' , require('./routes/users'));
app.use( '/api/auth' , require('./routes/auth'));
app.use( '/api/contacts' , require('./routes/contacts'));


app.listen(PORT , ()=> console.log(`Server running on ${PORT}`));
