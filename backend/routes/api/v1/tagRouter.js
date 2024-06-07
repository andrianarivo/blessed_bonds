const express = require('express');

const router = express.Router();

const tagController = require('../../../controllers/tagController');

/**
 * @openapi
 * /:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     responses:
 *       200:
 *         description: Returns a mysterious string.
 */
router.get('/', tagController.tagsList);

router.get('/:id', tagController.getTag);

module.exports = router;