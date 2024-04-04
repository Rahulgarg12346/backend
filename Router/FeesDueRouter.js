




const express = require('express');
const router = express.Router();
const studentController = require('../Controller/FeesDueController')

// Route to create a new student
router.post('/feesdue', studentController.createStudent);

// Route to get all students by token
router.get('/feesdue', studentController.getAllStudents);
router.get('/feesdue/:Studenttoken', studentController.getStudentByToken);


// Route to update student by token
router.put('/feesdue/:Studenttoken', studentController.updateStudentByToken);

// Route to delete student by token
router.delete('/feesdue/:Studenttoken', studentController.deleteStudentByToken);

module.exports = router;

