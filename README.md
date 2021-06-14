

**Chatbots**<br>

The goal of this project is to deploy several transformer-based chatbots from HuggingFace repos, serving them with Flask, while building client-interfacing web stack is on Vue.js-Node.js.

The project app schema how it's deployed on a cloud server can be depicted as follows:

<img src="https://i.ibb.co/WxS1XZF/Slide1.jpg" width="700" height="400"><br><br>

The first two models that will be available are:

1) Microsof't DialoBot
2) Reformer model


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




