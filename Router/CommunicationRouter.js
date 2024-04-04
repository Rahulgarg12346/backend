const express = require('express');
const router = express.Router();
const communicationController = require('../Controller/CommunicationController');

// Route to send a communication message (POST request)
router.post('/send', communicationController.sendMessage);

// Route to get communication messages for a specific user (GET request)
router.get('/getMessages/:userId', communicationController.getMessages);

module.exports = router;
