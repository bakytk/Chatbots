
require('dotenv').config()
const PORT = process.env.EXPRESS_PORT || "30000";

const express = require('express');
const app = express();
const mongoose = require ('mongoose');

app.set('trust proxy', 1);
//const createError = require('http-errors');


const db = require('./db');

//mongoose connection
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:37017/nlpMessages', {
//     useNewUrlParser: true,
// }).then( function() {
//   console.log('MongoDB is connected');
// })



const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const cors = require('cors')
app.use(cors())

const router = require('./src/routes');

const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10 });

app.use(limiter);
app.use('/', router);

app.use((err, request, response, next) => {

  //console.log("request", request);
  response.locals.message = err.message;
  console.error(err);
  const status = err.status || 500;
  response.locals.status = status;
  response.status(status);
  response.render('Error');
});

app.listen(PORT,function(){
  console.log("Starting server on port:", PORT);
});
