const asyncHandler = require('express-async-handler');
const { prisma } = require('../db');

exports.tagsList = asyncHandler(async (req, res) => {
  const allTags = await prisma.tag.findMany();
  res.json({
    tags: allTags
  })
});

exports.getTag = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const tag = await prisma.tag.find({
    where: {
      id: parseInt(id)
    }
  });
  res.json({
    tag
  })
})