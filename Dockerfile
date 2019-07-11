FROM node:10

RUN apt-get update
RUN apt-get -y install curl gnupg
RUN apt-get -y install postgresql-client nano
RUN npm install -g nodemon

# Create app directory
WORKDIR /app/

# Install app dependencies
COPY package*.json /app/

RUN npm install

# Bundle app source
COPY . /app/

EXPOSE 4000

CMD npm start
