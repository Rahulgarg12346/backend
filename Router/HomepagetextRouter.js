const express = require('express');
const router = express.Router();
const textController = require('../Controller/HomepagetextController');

// Create new text
router.post('/text', textController.createText);

// Get all texts
router.get('/text', textController.getAllTexts);

// Get text by ID
router.get('/text/:id', textController.getTextById);

// Update text by ID
router.put('/text/:id', textController.updateTextById);

// Delete text by ID
router.delete('/text/:id', textController.deleteTextById);

module.exports = router;