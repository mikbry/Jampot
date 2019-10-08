FROM node:10-slim

WORKDIR /opt/backend

COPY package*.json ./
RUN yarn install
COPY . .
RUN yarn compile:prod

VOLUME [ "/opt/backend/config" ]

CMD [ "node", "dist/" ]

USER node