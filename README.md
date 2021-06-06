

**NLP-API's**<br>

The goal of this project is to deploy several transformer-based NLP API from HuggingFace repos, served them with Flask (FastAPI), while client-interfacing web stack is via Vue.js-Node.js.

The project app schema how it's deployed on a cloud server can be depicted as follows:

<img src="https://i.ibb.co/WxS1XZF/Slide1.jpg" width="600" height="300"><br><br>


To abstract away from remote cloud server settings, the code here is to ready to test locally, the following (localhost) ports will be accessed on your machine:

```
# set ENV_PARAMS in .env:

VUE_PORT=8080 (optional: if you 'npm run serve')
NODE_PORT=7000
FLASK_PORT=9000
```

```

# instantiate client interfaces

cd WEB/client
npm install && npm build 

cd WEB/server
npm install & npm start



# hidden API modules

python3 -m venv env
source env/bin/activate

pip install  -r requirements.txt
python3 app.py
```




```

# Test API server from  cmd

curl --header "Content-Type: application/json" \
	--request POST \
	http://127.0.0.1:5000/calc_proba \
    --data '{"age": 31, "job": "blue-collar", "marital": "married", "education": "high.school", 
"default": "no", "housing": "no", "loan": "no", "contact": "cellular", "month": "jul", 
"day_of_week": "wed", "duration": 248, "campaign": 2, "pdays": 999, "previous": 0, 
"poutcome": "nonexistent", "emp.var.rate": 1.4, "cons.price.idx": 93.918, "cons.conf.idx": -42.7,
"euribor3m": 4.963, "nr.employed": 5228.1}'
```

