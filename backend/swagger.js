const swaggerJsdoc = require('swagger-jsdoc');
const tagSchema = require('./schemas/tag');
const topicSchema = require('./schemas/topic');
const prayerSchema = require('./schemas/prayer');
const statusSchema = require('./schemas/status');
const noteSchema = require('./schemas/note');
const answerSchema = require('./schemas/answer');

const options = {
  definition: {
    openapi: '3.0.0',
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
        description: 'Dev',
      },
    ],
    info: {
      title: 'Prayer Dom',
      version: '1.0.0',
    },
    tags: [
      {
        name: 'Tag',
        description: 'Operations about tags',
      },
      {
        name: 'Topic',
        description: 'Operations about topics',
      },
      {
        name: 'Prayer',
        description: 'Operations about prayers',
      },
      {
        name: 'Note',
        description: 'Operations about notes',
      },
      {
        name: 'Answer',
        description: 'Operations about answers',
      },
      {
        name: 'Status',
        description: 'Operations about statuses',
      },
    ],
    components: {
      schemas: {
        Tag: tagSchema,
        Topic: topicSchema,
        Prayer: prayerSchema,
        Status: statusSchema,
        Note: noteSchema,
        Answer: answerSchema,
      },
    },
  },
  apis: ['./routes/api/v1/*.js'],
};

exports.swaggerSpec = swaggerJsdoc(options);
