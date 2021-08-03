
const axios = require('axios');

module.exports = {

	message_handler: async (req, res) => {

  	let msg = req.body;
  	let api_url = process.env.API_URL;

  	try {

			let parameters = { params: { message: msg.content } }
			let response = await axios.get( api_url + '/model_call', parameters)
			let response_body = response.data.response
      let jsn = { success : true, message : response_body }

			res.json(jsn);
  	 } catch(error) {
  		res.json({ success : false, message : 'Processing error' });
		 }
   }
 }
