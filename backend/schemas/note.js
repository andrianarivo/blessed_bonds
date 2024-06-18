module.exports = {
  type: 'object',
  properties: {
    id: {
      type: 'integer',
      description: 'ID of the Note',
    },
    title: {
      type: 'string',
      description: 'Title of the Note',
    },
    content: {
      type: 'string',
      description: 'Content of the Note',
    },
    isPrivate: {
      type: 'boolean',
      description: 'Is the Note private?',
    },
    noteParentId: {
      type: 'integer',
      description: 'ID of the parent Note',
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
