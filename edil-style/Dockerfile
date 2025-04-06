FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy package files and install dependencies
RUN npm ci

# Build the Next.js app
RUN npm run build

# Expose port
EXPOSE 3000

# Start the app
CMD ["npm", "start"] 