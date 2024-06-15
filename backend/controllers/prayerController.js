const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');
const { isHexColor, isArrayOfIds } = require('../validators');
const { prisma } = require('../db');
const moment = require('moment');

exports.listPrayer = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, sortBy = 'summary.asc', summary } = req.query;
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
      summary: {
        contains: summary || '',
      },
    },
    include: {
      status: true,
      topic: true,
      tags: true,
    },
  };
  const prayers = await prisma.prayer.findMany(options);
  res.json({
    prayers,
  });
});

exports.getPrayer = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const prayer = await prisma.prayer.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!prayer) {
    return res.status(404).send({ error: 'Prayer not found' });
  }
  res.json({
    prayer,
  });
});

exports.getPrayerNotes = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { page = 1, limit = 10, sortBy = 'title.asc', title } = req.query;
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
          prayerId: parseInt(id),
        },
        {
          title: {
            contains: title || '',
          },
        },
      ],
    },
  };
  const notes = await prisma.note.findMany(options);
  res.json({
    notes,
  });
});

exports.createPrayer = [
  body('summary', 'Summary is required')
    .isString()
    .isLength({ min: 3 })
    .escape(),
  body('description', 'Description is required')
    .isString()
    .isLength({ min: 10 })
    .escape(),
  body('datetimeToPray').optional().isISO8601(),
  body('location').optional().isString().escape(),
  body('priority').optional().isInt({ min: -2, max: 2 }),
  body('color')
    .optional()
    .custom(isHexColor)
    .withMessage('Invalid hexadecimal color code'),
  body('isPrivate').optional().isBoolean(),
  body('topicId').optional().isInt({ min: 0 }),
  body('statusId').isInt({ min: 0 }),
  body('tagIds').optional().isArray().custom(isArrayOfIds),
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const {
      summary,
      description,
      datetimeToPray = moment().toISOString(),
      location = 'home',
      priority = 0,
      color = '#3300ff',
      isPrivate = true,
      topicId = undefined,
      statusId,
      tagIds = [],
    } = req.body;
    const data = {
      summary,
      description,
      datetimeToPray,
      location,
      priority,
      color,
      isPrivate,
      status: {
        connect: { id: statusId },
      },
    };
    if (topicId) {
      data.topic = {
        connect: { id: topicId },
      };
    }
    const prayer = await prisma.prayer.create({
      data,
    });
    tagIds.forEach(async (tagId) => {
      await prisma.tagsOnPrayers.create({
        data: {
          tag: {
            connect: { id: tagId },
          },
          prayer: {
            connect: { id: prayer.id },
          },
        },
      });
    });
    res.json({
      prayer,
    });
  }),
];

exports.deletePrayer = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const prayerToDelete = await prisma.prayer.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!prayerToDelete) {
    return res.status(404).send({ error: 'Prayer not found' });
  }
  const prayer = await prisma.prayer.delete({
    where: {
      id: parseInt(id),
    },
  });
  res.json({
    prayer,
  });
});

exports.updatePrayer = [asyncHandler(async (req, res) => {})];
