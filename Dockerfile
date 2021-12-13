FROM  node:16.9.1-alpine

WORKDIR /usr/src/app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY index.js .
EXPOSE 8080

CMD npm start
