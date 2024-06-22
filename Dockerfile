# Use the official Node.js image as the base image
FROM node

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Install Prisma CLI
RUN npm install prisma -g

# Install PostgreSQL client tools
RUN apt-get update && apt-get install -y postgresql-client

# Generate Prisma client
RUN npx prisma generate


# Expose the application port
EXPOSE 3004 5433

# Command to run the application
ENTRYPOINT ["node", "index.js"]