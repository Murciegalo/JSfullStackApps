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
// EndPoints
app.use( '/api/users' , require('./routes/users'));
app.use( '/api/auth' , require('./routes/auth'));
app.use( '/api/contacts' , require('./routes/contacts'));


app.listen(PORT , ()=> console.log(`Server running on ${PORT}`));
