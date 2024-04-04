const express = require('express')
const router = express.Router();
const attendance = require("../Controller/TeacherAttendanceController")

router.post ('/tAttendance', attendance.createattendance)
router.get ('/tAttendance', attendance.getT_Attendance)
router.get ('/tAttendance/:id', attendance.getAllT_Attendance)

module.exports = router;