

const express = require('express');
const router = express.Router();
const { createStudentGrade,getAllStudentGrades, getStudentGradeByToken, updateStudentGrade, deleteStudentGrade } = require('../Controller/GradeController');

// Route to create a new student grade
router.post('/grade', createStudentGrade);
router.get('/grade', getAllStudentGrades);

// Route to get a single student grade by token
router.get('/grade/:Studenttoken', getStudentGradeByToken);

// Route to update a student grade by token
router.put('/grade/:Studenttoken', updateStudentGrade);

// Route to delete a student grade by token
router.delete('/grade/:Studenttoken', deleteStudentGrade);

module.exports = router;    