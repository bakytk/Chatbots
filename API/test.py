
import json
import httplib2 

def api_request (string):
	
	api_key = 'str'
	url = 'http://url{}'.format(api_key)
	h = httplib2.Http()
	resp, content = h.request(url, 'GET')
	result = json.loads(content)
	return result
	
