const express = require('express');

const tagRouter = require('./tagRouter');
const topicRouter = require('./topicRouter');
const prayerRouter = require('./prayerRouter');
const statusRouter = require('./statusRouter');

const prayerNoteRouter = require('./prayerNoteRouter');
const prayerAnswerRouter = require('./prayerAnswerRouter');

const router = express.Router();

router.use('/tags', tagRouter);
router.use('/topics', topicRouter);
router.use('/prayers', prayerRouter);
router.use('/statuses', statusRouter);

router.use('/prayers/:prayerId/notes', prayerNoteRouter);
router.use('/prayers/:prayerId/answers', prayerAnswerRouter);

module.exports = router;
