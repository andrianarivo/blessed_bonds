module.exports = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      description: 'ID of the Topic',
    },
    name: {
      type: 'string',
      description: 'Name of the Topic',
    },
    description: {
      type: 'string',
      description: 'Description of the Topic',
    },
    createdAt: {
      type: 'string',
      format: 'date-time',
      description: 'Date and time of the Topic creation',
    },
    updatedAt: {
      type: 'string',
      format: 'date-time',
      description: 'Date and time of the Topic update',
    },
  },
  required: ['name'],
};
