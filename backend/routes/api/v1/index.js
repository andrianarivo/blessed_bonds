const express = require('express');

const tagRouter = require('./tagRouter');
const topicRouter = require('./topicRouter');
const prayerRouter = require('./prayerRouter');

const router = express.Router();

router.use('/tags', tagRouter);
router.use('/topics', topicRouter);
router.use('/prayers', prayerRouter);

module.exports = router;
