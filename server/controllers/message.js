
const axios = require('axios');

module.exports = {

	message_handler: (req, res) => {

  	let msg = req.body;
  	//console.log (msg);
  	let api_url = process.env.API_URL;

  	try {
  		axios.get( api_url + '/model_call', { params: { message: msg.content } })
  		.then(
        (r)=> {

          jsn = {
    				success : true,
    				message : r.data.response,
    			}
          res.json(jsn);
  		});
  	 } catch(error) {

       console.log(error);
  		 res.json({
  			success : false,
  			message : 'Server processing error..',
  		 });
  	 }//try-catch
   }//message-handler
 }
