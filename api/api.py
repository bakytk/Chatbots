
# from preprocessor import type_checker, encoder, jsn_to_list
from conv_ai import get_response

from flask import Flask, jsonify, request
from flask_cors import CORS

# configuration
app = Flask(__name__)
app.debug = False

# enable CORS
CORS(app, resources={r'/*': {'origins': '*'}})
# restrict to specific port

@app.route('/model_call', methods=['GET'])
def model_call():

	user_message = request.args.get('message')
	if not user_message:
		return jsonify(error='No input provided')
	response = get_response (user_message)
	return jsonify(response=response)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=35000)
	# Running on http://172.23.0.2:12000
