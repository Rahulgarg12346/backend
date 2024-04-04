const express = require("express")
const router = express.Router();
const classController = require("../Controller/ClassController");
router.post ('/Classes', classController.createClass)
router.get ('/Classes', classController.getClasses)
router.get ('/Classes/:id', classController.getAllClassesById)
router.put ('/Classes/:id', classController.updateClasses)
router.delete ('/Classes/:id', classController.deleterClasses)

module.exports =router;