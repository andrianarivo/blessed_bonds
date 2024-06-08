const asyncHandler = require('express-async-handler');
const { prisma } = require('../db');

exports.listTag = asyncHandler(async (req, res) => {
  const allTags = await prisma.tag.findMany();
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