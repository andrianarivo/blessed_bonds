const express = require('express');

const router = express.Router();

const {
  listStatus,
  getStatus,
  createStatus,
  deleteStatus,
  updateStatus,
} = require('../../../controllers/statusController');

/**
 * @openapi
 * /statuses:
 *   get:
 *     tags:
 *       - Status
 *     description: Get list of Statuses
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
 *         description: Number of statuses per page
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
 *           default: "Done"
 *         description: Search by name
 *     responses:
 *       200:
 *         description: Returns an array of statuses
 */
router.get('/', listStatus);

/**
 * @openapi
 * /statuses/{id}:
 *   get:
 *     tags:
 *       - Status
 *     description: Get Status specified by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the Status
 *     responses:
 *       200:
 *         description: Returns a Status
 *       404:
 *         description: Status not found
 */
router.get('/:id', getStatus);

/**
 * @openapi
 * /statuses:
 *   post:
 *     tags:
 *       - Status
 *     description: Create a new Status
 *     requestBody:
 *       description: Status data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            $ref: '#/components/schemas/Status'
 *     responses:
 *       200:
 *         description: Status created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', createStatus);

/**
 * @openapi
 * /statuses/{id}:
 *   delete:
 *     tags:
 *       - Status
 *     description: Delete Status specified by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the Status
 *     responses:
 *       200:
 *         description: Status deleted successfully
 *       404:
 *         description: Status not found
 */
router.delete('/:id', deleteStatus);

/**
 * @openapi
 * /statuses/{id}:
 *   patch:
 *     tags:
 *       - Status
 *     description: Update Status specified by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the Status
 *     requestBody:
 *       description: Status data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            $ref: '#/components/schemas/Status'
 *     responses:
 *       200:
 *         description: Status updated successfully
 *       400:
 *         description: Validation error
 */
router.patch('/:id', updateStatus);

module.exports = router;
