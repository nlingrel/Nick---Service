FROM node:latest
WORKDIR /src/app
COPY  . /src/app
RUN npm install
EXPOSE 8084
CMD node server.js

