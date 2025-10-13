# Build stage
FROM node:18-alpine AS build

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]



# '''Multi-stage build:

# First stage: build the React app

# Second stage: serve it using Nginx

# Container exposes port 80 (default HTTP port)

# Static files are served efficiently by Nginx '''