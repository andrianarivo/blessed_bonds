FROM node:20.11.1-alpine3.19

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
COPY entrypoint.sh /entrypoint.sh
EXPOSE 3001
EXPOSE 6006
RUN chmod +x /entrypoint.sh
ENTRYPOINT [ "/entrypoint.sh" ]
CMD ["npm", "run", "dev"]
