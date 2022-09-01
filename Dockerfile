FROM node:lts-alpine

COPY . .

WORKDIR /app

RUN npm install

EXPOSE 3000