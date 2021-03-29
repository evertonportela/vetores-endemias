FROM node:12-slim

WORKDIR /home/node/api

COPY package*.json ./

RUN npm i -g @adonisjs/cli
RUN npm install

COPY . .

EXPOSE 8081
