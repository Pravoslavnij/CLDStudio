FROM node:latest

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y yarn

COPY package.json .

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start" ]