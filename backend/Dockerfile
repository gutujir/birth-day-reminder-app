# Use a small base image for Node.js runtime
FROM node:20-alpine AS base

# Set working directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install --omit=dev

# Copy application source
COPY src ./src

# Expose backend port
EXPOSE 5000

# Use production mode for better defaults
ENV NODE_ENV=production

# Start the server
CMD ["node", "src/index.js"]
