const express = require('express');

const router = express.Router();

const tagController = require('../../../controllers/tagController');

router.get('/', tagController.tagsList);
router.get('/:id', tagController.getTag);

module.exports = router;