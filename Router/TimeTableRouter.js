const express = require('express');
const router = express.Router();
const timetableController = require('../Controller/TimeTableController');

router.post('/Timetablecreatepost', timetableController.createTimetableEntry);

router.get('/TimetablegetByDay', timetableController.getTimetableByDay);

router.put('/Timetableupdate/:id', timetableController.updateTimetableEntry);

router.delete('/Timetabledelete/:id', timetableController.deleteTimetableEntry);

module.exports = router;
