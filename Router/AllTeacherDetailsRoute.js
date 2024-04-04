const express = require('express')

const router = express.Router();
const AllTeacherController = require('../Controller/AllTeacherDetailsController')
router.post('/AddTeacher', AllTeacherController.AllTeachers)
router.get('/AddTeacher', AllTeacherController.getAllTeachers)
router.get('/AddTeacher/:id', AllTeacherController.getAllTeachersById)
router.get('/AddTeacher/:id', AllTeacherController.updateAllTeacher)

module.exports = router;