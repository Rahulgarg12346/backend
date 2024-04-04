const express = require('express');


 const router = express.Router();
 const Controller = require('../Controller/CourseController');
 router.post ('/course', Controller.createCourse)
 router.get ('/course', Controller.getCourse)
 router.get ('/course/:id', Controller.getAllCourseById)
 router.put ('/course/:id', Controller.updateCourse)
 router.delete ('/course/:id', Controller.deleterCourse)
module.exports = router;