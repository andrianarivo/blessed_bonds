const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');
const { prisma } = require('../db');
const { isArrayOfIds } = require('../validators');

exports.listStatus = asyncHandler(async (req, res) => {
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
  const status = await prisma.status.findMany(options);
  res.json({
    page: parseInt(page),
    limit: parseInt(limit),
    sortBy,
    status,
  });
});

exports.getStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const status = await prisma.status.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!status) {
    return res.status(404).send({ error: 'Status not found' });
  }
  res.json({
    status,
  });
});

exports.createStatus = [
  body('name', 'Name is required').isString().isLength({ min: 3 }).escape(),
  body('prayerIds').optional().isArray().custom(isArrayOfIds),
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const { name, prayerIds = undefined } = req.body;
    const status = await prisma.status.create({
      data: {
        name,
      },
    });
    if (prayerIds) {
      await prisma.prayer.updateMany({
        where: {
          id: {
            in: prayerIds,
          },
        },
        data: {
          statusId: status.id,
        },
      });
    }
    res.json({
      status,
    });
  }),
];

exports.deleteStatus = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const statusToDelete = await prisma.status.findUnique({
    where: {
      id: parseInt(id),
    },
  });
  if (!statusToDelete) {
    return res.status(404).send({ error: 'Status not found' });
  }
  const prayerIds = statusToDelete.prayers?.map((prayer) => prayer.id) ?? [];
  await prisma.prayer.updateMany({
    where: {
      id: {
        in: prayerIds,
      },
    },
    data: {
      statusId: null,
    },
  });
  const status = await prisma.status.delete({
    where: {
      id: parseInt(id),
    },
  });
  res.json({
    status,
  });
});

exports.updateStatus = [
  body('name', 'Name is required')
    .optional()
    .isString()
    .isLength({ min: 3 })
    .escape(),
  body('prayerIds').optional().isArray().custom(isArrayOfIds),
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const { id } = req.params;
    const statusToUpdate = await prisma.status.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    if (!statusToUpdate) {
      return res.status(404).send({ error: 'Status not found' });
    }
    const { name, prayerIds = undefined } = req.body;
    const status = await prisma.status.update({
      data: {
        name,
      },
      where: {
        id: parseInt(id),
      },
    });
    if (prayerIds) {
      await prisma.prayer.updateMany({
        where: {
          id: {
            in: prayerIds,
          },
        },
        data: {
          statusId: status.id,
        },
      });
    }
    res.json({
      status,
    });
  }),
];
