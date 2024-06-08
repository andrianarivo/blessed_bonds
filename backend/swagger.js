const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    servers: [{
      url: 'http://localhost:3000/api/v1',
      description: 'Dev'
    }],
    info: {
      title: 'Hello World',
      version: '1.0.0',
    },
  },
  apis: ['./routes/api/v1/*.js'],
};

exports.swaggerSpec = swaggerJsdoc(options);
