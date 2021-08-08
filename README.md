
<img src="https://i.ibb.co/kghY2Bf/chatbot.jpg" width="700" height="400"><br><br>

**Chatbots**<br>

The goal of this project is to deploy several transformer-based chatbots from HuggingFace repos, <br/>
serving the model API with Flask, while building client interfaces on Vue.js-Node.js stack

The first deployed bot is based on Microsof't DialoBot and can be tested at the following link: <br/>
https://nlp-api.netlify.app

```

# project is a work-in-progress, but is already runnable with the following commands:

git clone repo-url
cd download-folder

docker-compose build
docker-compose up -d

cd client
netlify init
npm install && npm build && netlify deploy --prod

```
