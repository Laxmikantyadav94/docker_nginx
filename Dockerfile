FROM node:latest

WORKDIR ./app

COPY ./ /app

EXPOSE 9898

CMD node index.js