// Using mongoose to plug in my DB
const mongoose = require('mongoose');
const config = require('config');
const db = config.get("mongoURI");

const connectDB = async () => {
  try {
    await mongoose.connect( db , {
      useCreateIndex: true,
      useNewUrlParser: true ,
      useUnifiedTopology: true
    });
    console.log('Mongo DB connected')
  } 
  catch (error) {
    console.log(error.message);
  }
}


module.exports = connectDB;