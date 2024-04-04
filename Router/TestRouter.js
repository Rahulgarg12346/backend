const express = require('express');
const router = express.Router();
const testController = require('../Controller/TestController');

router.post('/tests', testController.createTest);
router.get('/tests', testController.getAllTests);
router.get('/tests/:id', testController.getAllTestsbyid);

router.put('/tests/:id', testController.updateTest);
router.delete('/tests/:id', testController.deleteTest);

module.exports = router;
