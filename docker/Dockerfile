FROM node:latest

WORKDIR /projetouserallog

COPY package*.json .

EXPOSE 3000

RUN npm install

COPY . .

CMD ["npm", "start"] 