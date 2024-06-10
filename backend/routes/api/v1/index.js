const express = require('express');

const tagRouter = require('./tagRouter');
const topicRouter = require('./topicRouter');

const router = express.Router();

router.use('/tags', tagRouter);
router.use('/topics', topicRouter);

module.exports = router;