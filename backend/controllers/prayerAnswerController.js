const asyncHandler = require('express-async-handler');
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

exports.createPrayerAnswer = [asyncHandler(async (req, res) => {})];

exports.deletePrayerAnswer = asyncHandler(async (req, res) => {});

exports.updatePrayerAnswer = [asyncHandler(async (req, res) => {})];
