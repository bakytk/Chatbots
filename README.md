
<img src="https://i.ibb.co/kghY2Bf/chatbot.jpg" width="700" height="400"><br><br>

**Chatbots**<br>

The goal of this project is to deploy several transformer-based chatbots from HuggingFace repos <br/>

The first deployed bot can be tested at the following link: <br/>
https://nlp-api.netlify.app

The features of this app:

- Mongo-database to log messages
- Vue.js as front-end framework
- Express.js as customer-facing backend
- Flask - API framework to serve chatbot
- Chatbot - pre-trained Microsoft' DialoBot pulled from HuggingFace _transformers_ repo

```

# project is a work-in-progress, but is already runnable with the following commands:

git clone repo-url
cd download-folder

docker-compose build
docker-compose up -d

cd client
npm install && npm build 
netlify init && netlify deploy --prod

```
