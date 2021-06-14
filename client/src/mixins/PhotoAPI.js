
import axios from 'axios'

export default async function fetchPhoto (input, output) {
	
		var token = '563492ad6f9170000100000180942959d8884968956c81ed519c1081'
	    var params = { 'headers': { 'Authorization': token } }
	
		for (var i=0; i <input.length; i++) {
											  
			var el = input [i]
			var resp = await axios.get(`https://api.pexels.com/v1/photos/${el}`, params); 	
			output.push (resp.data.src.large2x); 
		}
	}
