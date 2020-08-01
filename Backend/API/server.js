//importing express
const express = require('express');
const app = express();

//importing graphql modules and schema
const {graphqlHTTP} = require('express-graphql');
const gqlschema = require("./GraphqlSchema");

//importing logger
const serverLog = require('./logger');

//importing routes
const top_least_series = require('./Routes/TopAndLeastTimeSeries');
const Exp_Index_Series = require('./Routes/ExpTimeSeriesAreawise');
const allRes_TS = require('./Routes/AllResponseTimeSeries');
const exp_till_date = require('./Routes/EXpTillDateTimeSeries');


//importing db module
const db =require('./db');
const mongoose = require('mongoose');

//setting server port
const PORT = 4000;

//importing helmet module
const helmet = require('helmet');

//enabling .env file
require('dotenv').config();

//importing routes
const exp_chart = require('./Routes/exp_imp_index');
const donut = require('./Routes/donut');
const top_least = require('./Routes/top_n_least');
const devexp = require('./Routes/devExp');
const top_least_guage = require('./Routes/top_least_gauge');
const heatmap = require('./Routes/resp_heatmap');


//setting view engine
app.set("views", "./views");
app.set("view engine", "pug");
app.set("view cache", true);

//setting up static resources
app.use(express.static('./Public'));

//adding helmet security middleware
app.use(helmet());

//adding cross origin resource sharing (cors) support
app.use(require('cors')());

app.use(/*gateKeeper,*/ 
       top_least_series,
        Exp_Index_Series ,
        allRes_TS ,
       exp_till_date
     
        
       );

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

//setting up graphql API route
app.use('/graphql',graphqlHTTP({
    schema: gqlschema,
    graphiql: true
}));
app.use(
 exp_chart,
  donut,
  top_least,  
  devexp,
  heatmap,
  top_least_guage,  
 );



//starting server  
app.listen(PORT,()=>{
    serverLog.info(`server listening on http://localhost:${PORT}`);
});
