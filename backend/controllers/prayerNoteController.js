const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');
const { isArrayOfIds } = require('../validators');
const { prisma } = require('../db');

exports.listPrayerNote = asyncHandler(async (req, res) => {
  const { prayerId } = req.params;
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
          prayerId: parseInt(prayerId),
        },
        {
          title: {
            contains: title || '',
          },
        },
      ],
    },
    include: {
      replies: true,
    },
  };
  const notes = await prisma.note.findMany(options);
  res.json({
    page: parseInt(page),
    limit: parseInt(limit),
    sortBy,
    notes: notes.filter((note) => !note.noteParentId),
  });
});

exports.getPrayerNote = asyncHandler(async (req, res) => {
  const { noteId } = req.params;
  const note = await prisma.note.findUnique({
    where: {
      id: parseInt(noteId),
    },
    include: {
      replies: true,
    },
  });
  if (!note) {
    return res.status(404).send({ error: 'Note not found' });
  }
  res.json({
    note,
  });
});

exports.createPrayerNote = [
  body('title', 'Title is required').isString().isLength({ min: 3 }).escape(),
  body('content', 'Content is required')
    .isString()
    .isLength({ min: 10 })
    .escape(),
  body('isPrivate').isBoolean(),
  body('noteParentId').optional().isInt({ min: 0 }),
  body('replyIds').optional().isArray().custom(isArrayOfIds),
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const { prayerId } = req.params;
    const { title, content, isPrivate, noteParentId = undefined } = req.body;
    const note = await prisma.note.create({
      data: {
        title,
        content,
        isPrivate,
        noteParentId,
        prayerId: parseInt(prayerId),
      },
    });
    res.json({
      note,
    });
  }),
];

exports.deletePrayerNote = asyncHandler(async (req, res) => {
  const { noteId } = req.params;
  const noteToDelete = await prisma.note.findUnique({
    where: {
      id: parseInt(noteId),
    },
  });
  if (!noteToDelete) {
    return res.status(404).send({ error: 'Note not found' });
  }
  const note = await prisma.note.delete({
    where: {
      id: parseInt(noteId),
    },
  });
  res.json({
    note,
  });
});

exports.updatePrayerNote = [
  body('title', 'Title is required')
    .optional()
    .isString()
    .isLength({ min: 3 })
    .escape(),
  body('content', 'Content is required')
    .optional()
    .isString()
    .isLength({ min: 10 })
    .escape(),
  body('isPrivate').optional().isBoolean(),
  body('noteParentId').optional().isInt({ min: 0 }),
  body('replyIds').optional().isArray().custom(isArrayOfIds),
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }
    const { noteId } = req.params;
    const noteToUpdate = await prisma.note.findUnique({
      where: {
        id: parseInt(noteId),
      },
    });
    if (!noteToUpdate) {
      return res.status(404).send({ error: 'Note not found' });
    }
    const {
      title = noteToUpdate.title,
      content = noteToUpdate.content,
      isPrivate = noteToUpdate.isPrivate,
      noteParentId = noteToUpdate.noteParentId,
    } = req.body;
    const data = {
      title,
      content,
      isPrivate,
      noteParentId,
    };
    const note = await prisma.note.update({
      where: {
        id: parseInt(noteId),
      },
      data,
    });
    res.json({
      note,
    });
  }),
];
