const express = require('express');

const router = express.Router();

const {listTag, getTag} = require('../../../controllers/tagController');

/**
 * @openapi
 * /tags:
 *   get:
 *     description: Get list of Tags
 *     responses:
 *       200:
 *         description: Returns an array of Tags
 */
router.get('/', listTag);

/**
 * @openapi
 * /tags/{id}:
 *   get:
 *     description: Get Tag specified by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the Tag
 *     responses:
 *       200:
 *         description: Returns a Tag
 *       404:
 *         description: Tag not found
 */
router.get('/:id', getTag);

module.exports = router;