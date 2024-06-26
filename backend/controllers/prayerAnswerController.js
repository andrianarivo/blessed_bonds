const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');
const { prisma } = require('../db');

exports.listPrayerAnswer = asyncHandler(async (req, res) => {
  const { prayerId } = req.params;
  const { page = 1, limit = 10, sortBy = 'content.asc', content } = req.query;
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
      AND: [
        {
          prayerId: parseInt(prayerId),
        },
        {
          content: {
            contains: content || '',
          },
        },
      ],
    },
    include: {
      replies: true,
    },
  };
  const answers = await prisma.answer.findMany(options);
  res.json({
    page: parseInt(page),
    limit: parseInt(limit),
    sortBy,
    answers,
  });
});

exports.getPrayerAnswer = asyncHandler(async (req, res) => {
  const { answerId } = req.params;
  const answer = await prisma.answer.findUnique({
    where: {
      id: parseInt(answerId),
    },
  });
  if (!answer) {
    return res.status(404).send({ error: 'Answer not found' });
  }
  res.json({
    answer,
  });
});

exports.createPrayerAnswer = [
  body('content', 'Content is required')
    .isString()
    .isLength({ min: 3 })
    .escape(),
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { prayerId } = req.params;
    const { content } = req.body;
    const answer = await prisma.answer.create({
      data: {
        content,
        prayer: {
          connect: {
            id: parseInt(prayerId),
          },
        },
      },
    });
    res.json({
      answer,
    });
  }),
];

exports.deletePrayerAnswer = asyncHandler(async (req, res) => {
  const { answerId } = req.params;
  const answerToDelete = await prisma.answer.findUnique({
    where: {
      id: parseInt(answerId),
    },
  });
  if (!answerToDelete) {
    return res.status(404).send({ error: 'Answer not found' });
  }
  const answer = await prisma.answer.delete({
    where: {
      id: parseInt(answerId),
    },
  });
  res.json({
    answer,
  });
});

exports.updatePrayerAnswer = [
  body('content', 'Content is required')
    .optional()
    .isString()
    .isLength({ min: 3 })
    .escape(),
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const { answerId } = req.params;
    const answerToUpdate = await prisma.answer.findUnique({
      where: {
        id: parseInt(answerId),
      },
    });
    if (!answerToUpdate) {
      return res.status(404).send({ error: 'Answer not found' });
    }
    const { content = answerToUpdate.content } = req.body;
    const answer = await prisma.answer.update({
      data: {
        content,
      },
      where: {
        id: parseInt(answerId),
      },
    });
    res.json({
      answer,
    });
  }),
];
