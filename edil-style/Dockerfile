FROM node:20-alpine

# Create app directory
WORKDIR .

# Copy the rest of the application
COPY . .

# npm ci
RUN npm ci

# Build the Next.js app
RUN npm run build

# Expose port
EXPOSE 3890

# Start the app
CMD ["npm", "start"] 