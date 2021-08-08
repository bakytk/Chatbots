FROM node:10-alpine

ADD . /node-app
#RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /node-app

COPY package*.json ./node-app/

#USER node

RUN npm install

#COPY --chown=node:node . .

EXPOSE 10000

CMD [ "node", "server.js" ]
