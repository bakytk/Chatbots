
const mongoose = require('mongoose');
const msgSchema = require('../models/msgModel');

const Message = mongoose.model('Message', msgSchema);
const axios = require('axios');

const {
  API_URL,
} = process.env;

module.exports = {

	 message_handler: (req, res) => {

    //console.log("request", req);
		let msg_body = {

			user_agent: req.headers['user-agent'],
			content: req.body.content,
			participant_id: Number(req.body.participantId),
			timestamp: req.body.timestamp
		}

    let newMessage = new Message(msg_body);
    newMessage.save( async (error, message) => {

        if (error) {
					console.log('error1\n', error)
					//res.send('Server error');
				}

		  	try {

					let parameters = { params: { message: req.body.content } }
					let response = await axios.get( API_URL + '/model_call', parameters)
					let response_body = response.data.response

		      let jsn = {
						success : true,
						message : response_body }
					res.json(jsn);

		  	 } catch(error) {

					  console.log('error2\n', error)
			  		res.json({
							success : false,
							message : 'Processing error' });
					 }
    });

	}
}
