FROM  node:16.9.1-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)

COPY package*.json ./

# If you are building your code for production
# RUN npm install --only=production

RUN npm install
RUN npm build

# Bundle app source
COPY . .

CMD [ "npm", "start" ]