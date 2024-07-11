const mongoose = require("mongoose");

// define the mongodb connection url
const mongourl='mongodb://127.0.0.1:27017/hotels'// replace 'mydatabase' with yuor databse name
  
// set up mongodb connection
mongoose.connect(mongourl,{
//   useNewUrlParser:true,
//   useUnifiedTopology:true
})

// get default connection 
// mongoose maintians a default connection object representing the mongodb connection
const db=mongoose.connection;

db.on('connected',()=>{
  console.log('connected to mongodb server');
});
db.on('error',(err)=>{
  console.log('Mongo connnection error',err);
});
db.on('disconnected',()=>{
  console.log('Mongodb disconnected');
})

// Export the database connection
module.exports=db;