# Use an official Node.js image as the base image for building the app
FROM node:latest AS builder

# Set the working directory within the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json for npm install
COPY ./package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the app source code
COPY . .

# Build the app using the npm run build command
RUN npm run build

# Use an official Nginx image as the base image for serving the app
FROM nginx:latest

# Set the working directory within the container
WORKDIR /usr/share/nginx/html

# Copy the built app from the previous stage
COPY --from=builder /usr/src/app/build/ .

# Expose port 80 to allow incoming traffic to the Nginx server
EXPOSE 80

# Command to start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]