module.exports = {
  type: 'object',
  properties: {
    name: {
      type: 'string',
      description: 'Name of the Topic',
    },
    description: {
      type: 'string',
      description: 'Description of the Topic',
    },
 },
  required: ['name'],
};