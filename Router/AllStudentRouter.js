const express = require('express');
const router = express.Router();
const studentController = require('../Controller/AllStudentController');

router.post('/Student', studentController.createStudent);

router.get('/StudentgetAll', studentController.getAllStudents);

router.put('/Studentupdate/:id', studentController.updateStudent);

router.delete('/Studentdelete/:id', studentController.deleteStudent);

module.exports = router;
