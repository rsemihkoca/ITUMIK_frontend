FROM node:18.17.0-alpine3.17
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
CMD ["npm", "run", "dev"]
EXPOSE 3000