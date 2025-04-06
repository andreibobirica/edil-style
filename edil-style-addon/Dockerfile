FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy app files
COPY . .

# Install dependencies
RUN npm ci

# Build the app
RUN npm run build

# Expose port for HA
EXPOSE 3890

# Start the app
CMD ["npm", "start"]
