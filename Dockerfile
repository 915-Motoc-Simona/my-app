FROM node:latest
RUN mkdir -p /my-app/src
WORKDIR /my-app/src
COPY package.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "start"]