const express = require('express');

const router = express.Router();

const {
  listPrayer,
  getPrayer,
  createPrayer,
  deletePrayer,
  updatePrayer,
  getPrayerAnswers,
} = require('../../../controllers/prayerController');

const {
  listPrayerNote,
  getPrayerNote,
  createPrayerNote,
  deletePrayerNote,
  updatePrayerNote,
} = require('../../../controllers/prayerNoteController');

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
 *         description: ID of the Prayer
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

/**
 * @openapi
 * /prayers/{prayerId}/notes:
 *   get:
 *     tags:
 *       - Prayer
 *     description: Get Notes from a Prayer specified by ID
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
 *         description: Number of Notes per page
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *           default: "title.asc"
 *         description: Sorting field and order separeted by a dot
 *       - in: query
 *         name: title
 *         schema:
 *           type: string
 *           default: "Jesus is the Messiah"
 *         description: Search by title
 *     responses:
 *       200:
 *         description: Returns a list of Notes from the specified Prayer
 *       404:
 *         description: Prayer not found
 */
router.get('/:prayerId/notes', listPrayerNote);

/**
 * @openapi
 * /prayers/{prayerId}/notes/{noteId}:
 *   get:
 *     tags:
 *       - Prayer
 *     description: Get a Note specified by Prayer and ID
 *     parameters:
 *       - in: path
 *         name: prayerId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the Prayer
 *       - in: path
 *         name: noteId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the Note
 *     responses:
 *       200:
 *         description: Returns a Note from the specified Prayer
 *       404:
 *         description: Note not found
 */
router.get('/:prayerId/notes/:noteId', getPrayerNote);

/**
 * @openapi
 * /prayers/{prayerId}/notes:
 *   post:
 *     tags:
 *       - Prayer
 *     description: Create a new Note for a Prayer
 *     parameters:
 *       - in: path
 *         name: prayerId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the Prayer
 *     requestBody:
 *       description: Note data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            $ref: '#/components/schemas/Note'
 *     responses:
 *       200:
 *         description: Note created successfully
 *       400:
 *         description: Validation error
 */
router.post('/:prayerId/notes', createPrayerNote);

/**
 * @openapi
 * /prayers/{prayerId}/notes/{noteId}:
 *   delete:
 *     tags:
 *       - Prayer
 *     description: Delete a Note from a Prayer specified by ID
 *     parameters:
 *       - in: path
 *         name: prayerId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the Prayer
 *       - in: path
 *         name: noteId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the Note
 *     responses:
 *       200:
 *         description: Note deleted successfully
 *       404:
 *         description: Note not found
 */
router.delete('/:prayerId/notes/:noteId', deletePrayerNote);

/**
 * @openapi
 * /prayers/{prayerId}/notes/{noteId}:
 *   patch:
 *     tags:
 *       - Prayer
 *     description: Update Note specified by Prayer and ID
 *     parameters:
 *       - in: path
 *         name: prayerId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the Prayer
 *       - in: path
 *         name: noteId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID of the Note
 *     requestBody:
 *       description: Note data
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *            $ref: '#/components/schemas/Note'
 *     responses:
 *       200:
 *         description: Note updated successfully
 *       400:
 *         description: Validation error
 */
router.patch('/:prayerId/notes/:noteId', updatePrayerNote);

/**
 * @openapi
 * /prayers/{id}/answers:
 *   get:
 *     tags:
 *       - Prayer
 *     description: Get Answers from a Prayer specified by ID
 *     parameters:
 *       - in: path
 *         name: id
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
 *           default: "Messiah"
 *         description: Search by content (keyword)
 *     responses:
 *       200:
 *         description: Returns a list of Answers from the specified Prayer
 *       404:
 *         description: Prayer not found
 */
router.get('/:id/answers', getPrayerAnswers);

module.exports = router;
