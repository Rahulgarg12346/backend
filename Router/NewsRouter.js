const express = require('express');
const router = express.Router();
const noticeController = require('../Controller/NewsController');

// Route to create a new notice
router.post('/notice', noticeController.createNotice);

// Route to get all notices
router.get('/notices', noticeController.getAllNotices);



// Route to delete a notice
router.delete('/notice/:id', noticeController.deleteNotice);

module.exports = router;
