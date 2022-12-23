FROM node:18

WORKDIR /var/www
COPY package.json .
RUN npm install
COPY . .