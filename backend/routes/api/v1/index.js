const express = require('express');

const tagRouter = require('./tagRouter');

const router = express.Router();

router.use('/tags', tagRouter);

module.exports = router;