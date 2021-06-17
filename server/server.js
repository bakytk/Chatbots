
require('dotenv').config()

var express = require('express');
var app = express();

const PORT = process.env.NODEPORT; 

const bodyParser= require('body-parser')
app.use(express.static('../client/dist'));

const cors = require('cors')
const jsonParser = bodyParser.json()
const urlParser = bodyParser.urlencoded({ extended: true })

const history = require('connect-history-api-fallback');
app.use(require('connect-history-api-fallback')())
app.use(history({
  verbose: true,
  disableDotRule: true
}));

const router = express.Router();
router.use(cors())
app.use(router);

const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100
});

app.use(limiter);

router.get("/",function(req,res){
	
	res.sendFile("index.html");
 });

router.post("/message", jsonParser, function(req,res){
	
	let msg = req.body;
	res.json({
        success : true,
        message : 'Patience, young padavan: no api connected yet',
    });
    
 });




// ------------------- START APP -------------------------
// ======================================================

app.listen(PORT,function(){
  console.log("Starting app ...");
});

