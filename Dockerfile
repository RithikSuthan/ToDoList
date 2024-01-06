# Use the official Node.js image as the base image
FROM node:14.18.1-alpine as build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Angular application
RUN npm run build

# Use a smaller base image for the production build
FROM nginx:1.21.3-alpine

# Copy the built Angular application from the build image
COPY --from=build /app/dist/rithikPortfolio /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
