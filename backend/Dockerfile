FROM node:12-slim

WORKDIR /opt/backend

COPY package*.json ./
RUN yarn
COPY . .
RUN yarn compile:prod

VOLUME [ "/opt/backend/config" ]

CMD [ "node", "dist/" ]

USER node