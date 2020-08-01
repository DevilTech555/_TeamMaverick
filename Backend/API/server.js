//importing express
const express = require('express');
const app = express();

//importing logger
const serverlog = require('./logger');

//importing db module
const db =require('./db');

//setting server port
const PORT = 4000;

//importing helmet module
const helmet = require('helmet');

//enabling .env file
require('dotenv').config();

//setting view engine
app.set("views", "./views");
app.set("view engine", "pug");
app.set("view cache", true);

//setting up static resources
app.use(express.static('./Public'));

//adding helmet security middleware
app.use(helmet);

//adding cross origin resource sharing (cors) support
app.use(require('cors')());

//checking connection to DB
db.connect((err) => {
    if (err) {
      serverLog.error(`Unable to connect to AirportDB -> ${err}`);
      process.exit(0);
    } else {
      serverLog.info(`Airport Database is online.`);
    }
  });

mongoose.connect(`mongodb+srv://${process.env.UNAME}:${process.env.PASS}@cluster0-qkpve.mongodb.net/AuthDB?retryWrites=true&w=majority`,{ useCreateIndex:true, useNewUrlParser : true, useUnifiedTopology: true },(err)=>{
    if(err){
      serverLog.error(`Unable to connect to AuthDB -> ${err}`);
      process.exit(0);
    }
    else{
      serverLog.info(`Auth Database is online.`);
    }
  });  

//starting server  
app.listen(PORT,()=>{
    serverlog.info(`server listening on http://localhost:${PORT}`);
});