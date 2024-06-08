const asyncHandler = require('express-async-handler');
const { prisma } = require('../db');

exports.listTag = asyncHandler(async (req, res) => {
  const { page = 1, limit = 10, sortBy = 'name.asc', name } = req.query;
  const [sortField, sortOrder] = sortBy.split('.');
  const skip = (page - 1) * limit;
  const options = {
    skip: Math.max(0, skip),
    take: parseInt(limit),
    orderBy: [
      {
        [sortField]: sortOrder
      }
    ],
    where: {
      name: {
        contains: name || ''
      }
    }
  }
  const allTags = await prisma.tag.findMany(options);
  res.json({
    tags: allTags
  })
});

exports.getTag = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const tag = await prisma.tag.findUnique({
    where: {
      id: parseInt(id)
    }
  });
  if (!tag) {
    res.status(404).send({error: 'Tag not found'}) 
  }
  res.json({
    tag
  })
})