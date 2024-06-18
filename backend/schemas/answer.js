module.exports = {
  type: 'object',
  properties: {
    content: {
      type: 'string',
      description: 'Content of the Note',
    },
    prayer: {
      $ref: '#/components/schemas/Prayer',
    },
    createdAt: {
      type: 'string',
      format: 'date-time',
      description: 'Date and time of the Note creation',
    },
    updatedAt: {
      type: 'string',
      format: 'date-time',
      description: 'Date and time of the Note update',
    },
  },
  required: ['title', 'content'],
};
