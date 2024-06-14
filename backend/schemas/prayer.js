module.exports = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      description: 'ID of the Prayer',
    },
    summary: {
      type: 'string',
      description: 'Summary of the Prayer',
    },
    description: {
      type: 'string',
      description: 'Description of the Prayer',
    },
    datetimeToPray: {
      type: 'string',
      format: 'date-time',
      description: 'Date and time to pray',
    },
    location: {
      type: 'string',
      description: 'Location to pray',
    },
    priority: {
      type: 'string',
      description:
        'Priority from [-2 ... 2] where -2 is very low and 2 is very high, 0 is neutral',
    },
    color: {
      type: 'string',
      description: 'Color indicator hex code',
    },
    isPrivate: {
      type: 'boolean',
      description: 'Is the Prayer private?',
    },
    topicId: {
      type: 'integer',
      description: 'Id of the Topic of the Prayer',
    },
    statusId: {
      type: 'integer',
      description: 'Id of the Status of the Prayer',
    },
    tagIds: {
      type: 'array',
      items: {
        type: 'integer',
      },
      description: 'Ids of the Tags of the Prayer',
    },
    createdAt: {
      type: 'string',
      format: 'date-time',
      description: 'Date and time of the Prayer creation',
    },
    updatedAt: {
      type: 'string',
      format: 'date-time',
      description: 'Date and time of the Prayer update',
    },
  },
  required: ['summary', 'description', 'status', 'topic'],
};
