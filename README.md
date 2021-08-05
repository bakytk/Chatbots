
<img src="https://i.ibb.co/kghY2Bf/chatbot.jpg" width="700" height="400"><br><br>

**Chatbots**<br>

The goal of this project is to deploy several transformer-based chatbots from HuggingFace repos, <br/>
serving them with Flask, while building client-interfacing web stack is on Vue.js-Node.js

The first deployed bot is based on Microsof't DialoBot and can be tested at the following link: <br/>
https://nlp-api.netlify.app

```

# project is a work-in-progress, but is already runnable with the following commands:

git clone github-repo-url
cd folder-downloaded

cd server
docker-compose up -d

cd api
python3 -m venv env
source env/bin/activate
pip install  -r requirements.txt
python3 app.py

cd client
netlify init
npm install && npm build && netlify deploy --prod

```
