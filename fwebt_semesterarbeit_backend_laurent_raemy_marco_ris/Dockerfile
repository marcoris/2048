FROM node:17

#Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8000

CMD [ "node", "controller.js" ]