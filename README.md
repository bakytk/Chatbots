


**NLP-API's**<br>

The goal of this project is to deploy several transformer-based NLP API from HuggingFace repos, serve them with Flask (FastAPI) and render access to theme through a Node.js web server. The basic front-end will be built on Vue.js

The project app schema can be depicted as follows:

<img src="https://i.ibb.co/mSf51mz/schema.jpg.jpg" width="700" height="400"><br><br>


```

# instantiate client interfaces

cd WEB/client

npm install && npm build 
cp index.html web_server_repo
npm 


# API server

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

