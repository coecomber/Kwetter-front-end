FROM node:14.16.1-alpine

EXPOSE 8080

WORKDIR /app
COPY package.json /app/package.json
RUN npm install
RUN npm install @vue/cli -g

CMD ["npm", "run", "serve"]