const express = require('express');

const router = express.Router();

const {listTag, getTag, createTag} = require('../../../controllers/tagController');

/**
 * @openapi
 * /tags:
 *   get:
 *     description: Get list of Tags
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *           default: 1
 *         description: Page number
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *           default: 10
 *         description: Number of Tags per page
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           default: "name.asc"
 *         description: Sorting field and order separeted by a dot
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *           default: "self-control"
 *         description: Search by name
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

/**
 * @openapi
 * /tags:
 *   post:
 *     description: Create a new Tag
 *     requestBody:
 *       description: Tag data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            $ref: '#/components/schemas/Tag'
 *     responses:
 *       200:
 *         description: Tag created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', createTag);

module.exports = router;