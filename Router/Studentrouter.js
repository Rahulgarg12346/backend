


const express = require('express')

const controller = require('../Controller/StudentController')
const router = express.Router();


router.post('/studentregister', controller.register);
router.get('/student', controller.getAllStudent);
// router.get('/student/:token',controller.getStudentByToken);
router.get('/student/:classestoken', controller.getStudentByclassestoken);

router.get('/students/:token',controller.getStudentByToken);



router.post('/studentlogin', controller.login);
// router.post('/allsignup', controller.signup);




// router.get('/student/:id', controller.getAllStudentById);

router.delete('/student/:id', controller.deleteStudent);
router.patch('/student/:token', controller.updateStudent); 



module.exports=router;

