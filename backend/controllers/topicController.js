const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');
const { prisma } = require('../db');

exports.listTopic = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, sortBy = 'name.asc', name } = req.query;
  const [sortField, sortOrder] = sortBy.split('.');
  const skip = (page - 1) * limit;
  const options = {
    skip: Math.max(0, skip),
    take: parseInt(limit),
    orderBy: [
      {
        [sortField]: sortOrder,
      },
    ],
    where: {
      name: {
        contains: name || '',
      },
    },
  };
  const topics = await prisma.topic.findMany(options);
  res.json({
    page: parseInt(page),
    limit: parseInt(limit),
    sortBy,
    topics,
  });
});

exports.getTopic = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const topic = await prisma.topic.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!topic) {
    return res.status(404).send({ error: 'Topic not found' });
  }
  res.json({
    topic,
  });
});

exports.createTopic = [
  body('name', 'Name is required').isString().isLength({ min: 3 }).escape(),
  body('description', 'Description has to be a string')
    .optional()
    .isString()
    .escape(),
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const { name, description = '' } = req.body;
    const topic = await prisma.topic.create({
      data: {
        name,
        description,
      },
    });
    res.json({
      topic,
    });
  }),
];

exports.deleteTopic = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const topicToDelete = await prisma.topic.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!topicToDelete) {
    return res.status(404).send({ error: 'Topic not found' });
  }
  const topic = await prisma.topic.delete({
    where: {
      id: parseInt(id),
    },
  });
  res.json({
    topic,
  });
});

exports.updateTopic = [
  body('name', 'Name has to be string')
    .optional()
    .isString()
    .isLength({ min: 3 })
    .escape(),
  body('description', 'Description has to be a string')
    .optional()
    .isString()
    .escape(),
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const { id } = req.params;
    const topicToUpdate = await prisma.topic.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!topicToUpdate) {
      return res.status(404).send({ error: 'Tag not found' });
    }
    const {
      name = topicToUpdate.name,
      description = topicToUpdate.description,
    } = req.body;
    const topic = await prisma.topic.update({
      data: {
        name,
        description,
      },
      where: {
        id: parseInt(id),
      },
    });
    res.json({
      topic,
    });
  }),
];
