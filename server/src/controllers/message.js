
const mongoose = require('mongoose');
const msgSchema = require('../models/msgModel');

const Message = mongoose.model('Message', msgSchema);
const axios = require('axios');

module.exports = {

	 message_handler: (req, res) => {

		let msg_body = {

			user_agent: req.headers['user-agent'],
			content: req.body.content,
			participant_id: Number(req.body.participantId),
			timestamp: req.body.timestamp
		}

    let newMessage = new Message(msg_body);

    newMessage.save( async (err, message) => {

        if (err) { res.send(err);}

				let api_url = process.env.API_URL;
		  	try {

					let parameters = { params: { message: req.body.content } }
					let response = await axios.get( api_url + '/model_call', parameters)

					let response_body = response.data.response
		      let jsn = {
						success : true,
						message : response_body }
					res.json(jsn);

		  	 } catch(error) {

		  		res.json({
						success : false,
						message : 'Processing error' });
				 }
    });

	}
}
