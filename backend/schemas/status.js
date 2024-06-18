module.exports = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      description: 'Name of the Status',
    },
    prayerIds: {
      type: 'array',
      items: {
        type: 'integer',
        description: 'IDs of the Prayers with the Status',
      },
      example: [1, 2, 3],
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
