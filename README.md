
<img src="https://i.ibb.co/kghY2Bf/chatbot.jpg" width="700" height="400"><br><br>

**Chatbots**<br>

The goal of this project is to deploy several transformer-based chatbots from HuggingFace repos, serving them with Flask, while building client-interfacing web stack is on Vue.js-Node.js

The first bot is based on Microsof't DialoBot, which can be pulled from HuggingFace, and can be tested at the following [link](https://www.linkedin.com/learning/paths/become-a-node-js-developer)

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
