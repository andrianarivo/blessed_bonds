const swaggerJsdoc = require('swagger-jsdoc');
const tagSchema = require('./schemas/tag'); 

const options = {
  definition: {
    openapi: '3.0.0',
    servers: [{
      url: 'http://localhost:3000/api/v1',
      description: 'Dev'
    }],
    info: {
      title: 'Prayer Dom',
      version: '1.0.0',
    },
    tags: [
      {
        name: 'Tag',
        description: 'Operations about tags',
      },
    ],
    components: {
      schemas: {
        Tag: tagSchema,
      },
    },
  },
  apis: ['./routes/api/v1/*.js'],
};

exports.swaggerSpec = swaggerJsdoc(options);
