const express = require('express');
const router = express.Router();
const activityController = require('../Controller/ActivityController');

// Create a new activity
router.post('/schoolactivity', activityController.createActivity);

// Get all activities
router.get('/schoolactivityallget', activityController.getAllActivities);

// Get activity by ID
router.get('/schoolactivityget/:id', activityController.getActivityById);

// Update activity
router.put('/schoolactivityupdate/:id', activityController.updateActivity);

// Delete activity
router.delete('/schoolactivitydelete/:id', activityController.deleteActivity);

module.exports = router;
