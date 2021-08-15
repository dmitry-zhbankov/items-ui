FROM node:alpine
EXPOSE 80
EXPOSE 443
RUN mkdir /app
COPY . /app
WORKDIR /app
COPY package.json ./
RUN npm install
CMD ["npm", "start"]