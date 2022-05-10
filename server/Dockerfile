FROM node:10-alpine

ADD . /node-app
WORKDIR /node-app

COPY package*.json /node-app/

#USER node

RUN chmod +x ./wait-for.sh ./docker-entrypoint.sh
RUN chmod +x /node-app/wait-for.sh /node-app/docker-entrypoint.sh
# RUN ls -la .
# RUN echo "-------"
# RUN ls -la /node-app

RUN npm install
# RUN ls /node-app/node_modules

EXPOSE 30000

# Add this line
# It _must_ use the JSON-array syntax
# ENTRYPOINT ["docker-entrypoint.sh"]
CMD [ "node", "server.js" ]
