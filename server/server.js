
require('dotenv').config()
const axios = require('axios');

const express = require('express');
const app = express();

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
	//console.log (msg);
	let api_url = process.env.API_URL;
	
	res.json({
			success : true,
			message : 'Patience, young padavan: no api connected yet..',
		 });
	
	/*
	try {
		
		axios.get( api_url + '/model_call', { params: { message: msg.content } })
		.then((r)=> {
			 
			res.json({
				success : true,
				message : r.data.response,
			});
		});
		 
	} catch(e) {
		
		 res.json({
			success : false,
			message : 'Server processing error..',
		 });
	}
	*/
 });




// ------------------- START APP -------------------------
// ======================================================

app.listen(PORT,function(){
  console.log("Starting app ...");
});

