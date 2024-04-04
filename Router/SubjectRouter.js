const express = require('express')
const router = express.Router();
const Subject = require("../Controller/SubjectController")

router.post ('/subject', Subject.createSubject)
router.get ('/subject', Subject.get_Subject)
router.get ('/subject/:id', Subject.getAll_Subject)
router.put ('/subject/:id', Subject.updateStudent)
router.delete ('/subject/:id', Subject.deleteStudent)

module.exports = router;
