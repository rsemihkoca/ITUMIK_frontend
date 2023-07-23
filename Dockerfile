# Stage 1: Build the application
FROM node:18.17.0-alpine3.17 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Create the production image
FROM node:18.17.0-alpine3.17 as runtime-image
WORKDIR /app
COPY --from=builder /app/dist ./dist
RUN npm install -g live-server --production
EXPOSE 3000
CMD ["live-server", "dist", "--port=3000", "--host=0.0.0.0"]