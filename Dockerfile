
FROM node:19-alpine3.16

WORKDIR /app

COPY . .

RUN npm install --silent

RUN npm install react-scripts@3.4.1 -g --silent

RUN npm run build

ENV NODE_ENV production

EXPOSE 3000

CMD [ "npm", "start" ]