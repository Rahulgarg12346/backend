const express = require('express')

const controller = require('../Controller/Teachercontoller');

const router = express.Router();


router.post('/Teacherregister', controller.register);
router.get('/Teacher', controller.getAllTeacherById);
router.get('/Teacher/:id', controller.getTeacherById);
router.delete('/Teacher/:id', controller.deleteTeacher);
router.patch('/Teacher/:id', controller.updateTeacher);
module.exports=router;




