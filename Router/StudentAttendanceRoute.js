const express = require('express')
const router = express.Router();
const attendance = require("../Controller/StudentAttendanceController")

router.post ('/sAttendance', attendance.createStudent)
router.get ('/sAttendance', attendance.getA_student)
router.get ('/sAttendance/:id', attendance.getAllA_student)

module.exports = router;