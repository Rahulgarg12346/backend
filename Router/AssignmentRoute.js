const express = require('express');
const router = express.Router();
const assignmentController = require('../Controller/AssignmentController');
const multer = require('multer');

// Multer configurations
const upload = multer();

router.post("/assignments", upload.single("myFile"), assignmentController.createAssignment);

router.get("/assignments", assignmentController.getAllAssignments);
router.get("/assignments/:id", assignmentController.getAssignmentById);
router.put("/assignments/:id", assignmentController.updateAssignment);
router.delete("/assignments/:id", assignmentController.deleteAssignment);

module.exports = router;
