const express = require('express');

const router = express.Router();

const {
  listPrayerAnswer,
  getPrayerAnswer,
  createPrayerAnswer,
  deletePrayerAnswer,
  updatePrayerAnswer,
} = require('../../../controllers/prayerAnswerController');

/**
 * @openapi
 * /prayers/{prayerId}/answers:
 *   get:
 *     tags:
 *       - Answer
 *     description: Get Answers from a Prayer specified by ID
 *     parameters:
 *       - in: path
 *         name: prayerId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the Prayer
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
 *         description: Number of Answers per page
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           default: "content.asc"
 *         description: Sorting field and order separeted by a dot
 *       - in: query
 *         name: content
 *         schema:
 *           type: string
 *           default: "Jesus saves"
 *         description: Search by content
 *     responses:
 *       200:
 *         description: Returns a list of Answers from the specified Prayer
 *       404:
 *         description: Prayer not found
 */
router.get('/', listPrayerAnswer);

/**
 * @openapi
 * /prayers/{prayerId}/answers/{answerId}:
 *   get:
 *     tags:
 *       - Answer
 *     description: Get an Answer specified by Prayer and ID
 *     parameters:
 *       - in: path
 *         name: prayerId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the Prayer
 *       - in: path
 *         name: answerId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the Answer
 *     responses:
 *       200:
 *         description: Returns an Answer from the specified Prayer
 *       404:
 *         description: Answer not found
 */
router.get('/:answerId', getPrayerAnswer);

module.exports = router;
