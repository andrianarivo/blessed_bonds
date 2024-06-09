module.exports = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      description: 'Name of the Tag',
    },
    bgColor: {
      type: 'string',
      description: 'Background color hex code',
    },
    textColor: {
      type: 'string',
      description: 'Text color hex code',
    },
  },
  required: ['name'],
};