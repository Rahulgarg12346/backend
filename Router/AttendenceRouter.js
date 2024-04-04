const express = require('express');
const router = express.Router();
const attendanceController = require('../Controller/AttendenceController');

router.post('/attendance', attendanceController.markAttendance);

router.put('/attendanceupdate/:id', attendanceController.updateAttendance);

router.get('/attendancestudent/:Id', attendanceController.getAttendance);

module.exports = router;

