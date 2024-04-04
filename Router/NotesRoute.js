const express = require('express');
const router = express.Router();

const noteController = require('../Controller/NotesConteoller');


router.post('/createNote', noteController.uploadnotesImage);


router.get('/createNote', noteController.getAllImages);
router.delete('/createNote/:id', noteController.deleteNote);




module.exports = router;