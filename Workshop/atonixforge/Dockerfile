# Use a Node.js base image
FROM node:23.10.0-bookworm

# Install necessary packages
RUN apt-get update && apt-get install -y \
    pkg-config \
    default-libmysqlclient-dev \
    build-essential \
    libssl-dev \
    libffi-dev \
    python3-dev \
    cargo \
    npm

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Define the command to run the app
CMD ["npm", "start"]