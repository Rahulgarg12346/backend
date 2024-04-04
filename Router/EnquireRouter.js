const express = require('express');
const router = express.Router();
const { createEnquire, getEnquires, getEnquireById, updateEnquire, deleteEnquire } = require('../Controller/EnquireController');

router.post('/enquire', createEnquire);
router.get('/enquires', getEnquires);
router.get('/enquire/:id', getEnquireById);
router.put('/enquire/:id', updateEnquire);
router.delete('/enquire/:id', deleteEnquire);

module.exports = router;
