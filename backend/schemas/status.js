module.exports = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      description: 'ID of the Status',
    },
    name: {
      type: 'string',
      description: 'Name of the Status',
    },
    prayers: {
      type: 'array',
      items: {
        $ref: '#/components/schemas/Prayer',
      },
      description: 'Prayers with the Status',
    },
    createdAt: {
      type: 'string',
      format: 'date-time',
      description: 'Date and time of the Status creation',
    },
    updatedAt: {
      type: 'string',
      format: 'date-time',
      description: 'Date and time of the Status update',
    },
  },
  required: ['name'],
};
