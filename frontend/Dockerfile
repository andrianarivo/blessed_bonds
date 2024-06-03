FROM node:20.11.1-alpine3.19

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN yarn

# Copy the rest of the application code
COPY . .

# Expose the frontend port (adjust if necessary)
EXPOSE 3001

# Command to run the frontend (adjust if necessary)
CMD ["npm", "run", "dev"]
