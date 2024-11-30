# Stage 1: Build the React application
FROM node:21-alpine AS build

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json for installing dependencies
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire app source code to the container
COPY . .

# Build the React application
RUN npm run build

# Stage 2: Serve the application
FROM nginx:alpine

# Copy the build output from the previous stage to Nginx's web root
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]