
require('dotenv').config()
const PORT = process.env.NODE_PORT;

const express = require('express');
const app = express();

app.set('trust proxy', 1);

const cookieSession = require('cookie-session');
//const createError = require('http-errors');

const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const cors = require('cors')
app.use(cors())

const router = require('./routes');

const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10 });

app.use(limiter);

app.use(
  cookieSession({
    name: 'session',
    keys: ['Ghdur687399s7w', 'hhjjdf89s866799'],
  })
);

app.use('/', router);

app.use((err, request, response, next) => {

  response.locals.message = err.message;
  console.error(err);
  const status = err.status || 500;
  response.locals.status = status;
  response.status(status);
  response.render('error');
});

app.listen(PORT,function(){
  console.log("Starting server");
});
