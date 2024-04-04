const express = require('express');
const router = express.Router();
const calendarController = require('../Controller/CalanderController');


// CRUD routes
router.get('/calendar', calendarController.getAllEvents);
router.post('/calendarpost', calendarController.createEvent);
router.put('/calendar/:id', calendarController.updateEvent);
router.delete('/calendar/:id', calendarController.deleteEvent);

module.exports = router;
