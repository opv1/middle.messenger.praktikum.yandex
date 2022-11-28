FROM node:latest
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENV PORT 3000
RUN npm run build
EXPOSE $PORT
CMD [ "node", "index.js" ]