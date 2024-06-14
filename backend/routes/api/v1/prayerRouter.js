const express = require('express');

const router = express.Router();

const {
  listPrayer,
  getPrayer,
  createPrayer,
  deletePrayer,
  updatePrayer,
} = require('../../../controllers/prayerController');

/**
 * @openapi
 * /prayers:
 *   get:
 *     tags:
 *       - Prayer
 *     description: Get list of Prayers
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
 *         description: Number of Prayers per page
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           default: "summary.asc"
 *         description: Sorting field and order separeted by a dot
 *       - in: query
 *         name: summary
 *         schema:
 *           type: string
 *           default: "God is provider"
 *         description: Search by summary
 *     responses:
 *       200:
 *         description: Returns an array of Prayers
 */
router.get('/', listPrayer);

/**
 * @openapi
 * /prayers/{id}:
 *   get:
 *     tags:
 *       - Prayer
 *     description: Get Prayer specified by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the Prayer
 *     responses:
 *       200:
 *         description: Returns a Prayer
 *       404:
 *         description: Prayer not found
 */
router.get('/:id', getPrayer);

/**
 * @openapi
 * /prayers:
 *   post:
 *     tags:
 *       - Prayer
 *     description: Create a new Prayer
 *     requestBody:
 *       description: Prayer data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            $ref: '#/components/schemas/Prayer'
 *     responses:
 *       200:
 *         description: Prayer created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', createPrayer);

/**
 * @openapi
 * /prayers/{id}:
 *   delete:
 *     tags:
 *       - Prayer
 *     description: Delete Prayer specified by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the Prayer
 *     responses:
 *       200:
 *         description: Prayer deleted successfully
 *       404:
 *         description: Prayer not found
 */
router.delete('/:id', deletePrayer);

/**
 * @openapi
 * /prayers/{id}:
 *   patch:
 *     tags:
 *       - Prayer
 *     description: Update Prayer specified by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the Tag
 *     requestBody:
 *       description: Prayer data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            $ref: '#/components/schemas/Prayer'
 *     responses:
 *       200:
 *         description: Prayer updated successfully
 *       400:
 *         description: Validation error
 */
router.patch('/:id', updatePrayer);

module.exports = router;
