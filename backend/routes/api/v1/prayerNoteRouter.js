const express = require('express');

const router = express.Router({ mergeParams: true });

const {
  listPrayerNote,
  getPrayerNote,
  createPrayerNote,
  deletePrayerNote,
  updatePrayerNote,
} = require('../../../controllers/prayerNoteController');

const { prayerExists } = require('../../../controllers/prayerController');

router.all('*', prayerExists);

/**
 * @openapi
 * /prayers/{prayerId}/notes:
 *   get:
 *     tags:
 *       - Note
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
router.get('/', listPrayerNote);

/**
 * @openapi
 * /prayers/{prayerId}/notes/{noteId}:
 *   get:
 *     tags:
 *       - Note
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
 *         description: Note or Prayer not found
 */
router.get('/:noteId', getPrayerNote);

/**
 * @openapi
 * /prayers/{prayerId}/notes:
 *   post:
 *     tags:
 *       - Note
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
 *       404:
 *         description: Prayer not found
 */
router.post('/', createPrayerNote);

/**
 * @openapi
 * /prayers/{prayerId}/notes/{noteId}:
 *   delete:
 *     tags:
 *       - Note
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
 *         description: Note or Prayer not found
 */
router.delete('/:noteId', deletePrayerNote);

/**
 * @openapi
 * /prayers/{prayerId}/notes/{noteId}:
 *   patch:
 *     tags:
 *       - Note
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
 *       404:
 *         description: Prayer not found
 */
router.patch('/:noteId', updatePrayerNote);

module.exports = router;
