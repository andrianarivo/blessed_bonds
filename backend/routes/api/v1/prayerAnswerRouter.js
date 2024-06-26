const express = require('express');

const router = express.Router({ mergeParams: true });

const {
  listPrayerAnswer,
  getPrayerAnswer,
  createPrayerAnswer,
  deletePrayerAnswer,
  updatePrayerAnswer,
} = require('../../../controllers/prayerAnswerController');

const { prayerExists } = require('../../../controllers/prayerController');

router.all('*', prayerExists);

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

/**
 * @openapi
 * /prayers/{prayerId}/answers:
 *   post:
 *     tags:
 *       - Answer
 *     description: Create a new Answer for a Prayer
 *     parameters:
 *       - in: path
 *         name: prayerId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the Prayer
 *     requestBody:
 *       description: Answer data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            $ref: '#/components/schemas/Answer'
 *     responses:
 *       200:
 *         description: Answer created successfully
 *       400:
 *         description: Validation error
 */
router.post('/', createPrayerAnswer);

/**
 * @openapi
 * /prayers/{prayerId}/answers/{answerId}:
 *   delete:
 *     tags:
 *       - Answer
 *     description: Delete a Answer from a Prayer specified by ID
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
 *         description: Answer deleted successfully
 *       404:
 *         description: Answer not found
 */
router.delete('/:answerId', deletePrayerAnswer);

/**
 * @openapi
 * /prayers/{prayerId}/answers/{answerId}:
 *   patch:
 *     tags:
 *       - Answer
 *     description: Update Answer specified by Prayer and ID
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
 *     requestBody:
 *       description: Answer data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            $ref: '#/components/schemas/Answer'
 *     responses:
 *       200:
 *         description: Answer updated successfully
 *       400:
 *         description: Validation error
 */
router.patch('/:answerId', updatePrayerAnswer);

module.exports = router;
