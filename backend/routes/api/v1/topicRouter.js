const express = require('express');

const router = express.Router();

const {
  listTopic,
  getTopic,
  createTopic,
  deleteTopic,
  updateTopic,
} = require('../../../controllers/topicController');

/**
 * @openapi
 * /topics:
 *   get:
 *     tags:
 *       - Topic
 *     description: Get list of Topics
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
 *         description: Number of Topics per page
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
 *           default: "finance"
 *         description: Search by name
 *     responses:
 *       200:
 *         description: Returns an array of Topics
 */
router.get('/', listTopic);

/**
 * @openapi
 * /topics/{id}:
 *   get:
 *     tags:
 *       - Topic
 *     description: Get Topic specified by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the Topic
 *     responses:
 *       200:
 *         description: Returns a Topic
 *       404:
 *         description: Topic not found
 */
router.get('/:id', getTopic);

/**
 * @openapi
 * /topics:
 *   post:
 *     tags:
 *       - Topic
 *     description: Create a new Topic
 *     requestBody:
 *       description: Topic data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            $ref: '#/components/schemas/Topic'
 *     responses:
 *       200:
 *         description: Topic created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', createTopic);

/**
 * @openapi
 * /topics/{id}:
 *   delete:
 *     tags:
 *       - Topic
 *     description: Delete Topic specified by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the Topic
 *     responses:
 *       200:
 *         description: Topic deleted successfully
 *       404:
 *         description: Topic not found
 */
router.delete('/:id', deleteTopic);

/**
 * @openapi
 * /topics/{id}:
 *   patch:
 *     tags:
 *       - Topic
 *     description: Update Topic specified by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the Topic
 *     requestBody:
 *       description: Topic data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            $ref: '#/components/schemas/Topic'
 *     responses:
 *       200:
 *         description: Topic updated successfully
 *       400:
 *         description: Validation error
 */
router.patch('/:id', updateTopic);

module.exports = router;
