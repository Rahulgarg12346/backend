const express = require('express');
const router = express.Router();
const calendarController = require('../Controller/EventCalanderController');

router.post('/event', calendarController.createEvent);

router.get('/eventgetAll', calendarController.getAllEvents);

router.put('/eventupdate/:id', calendarController.updateEvent);

router.delete('/eventdelete/:id', calendarController.deleteEvent);

module.exports = router;
