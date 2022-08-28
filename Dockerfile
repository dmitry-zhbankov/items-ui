FROM node:alpine
EXPOSE 80
EXPOSE 443
RUN mkdir /app
WORKDIR /app
COPY package.json ./
COPY package-lock.json ./
RUN npm install
COPY . ./
RUN npm run build
CMD ["node", "server.js"]