FROM node:latest

WORKDIR /src/app
COPY  package*.json ./
RUN npm install
COPY  . /src/app
EXPOSE 8084
CMD ["npm", "start"]

