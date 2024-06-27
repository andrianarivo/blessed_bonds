FROM node:20.11.1-alpine3.19

WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npx prisma generate
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
