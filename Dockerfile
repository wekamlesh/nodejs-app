FROM node:20-alpine3.17
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . /app/
CMD node server.js
EXPOSE 3000



