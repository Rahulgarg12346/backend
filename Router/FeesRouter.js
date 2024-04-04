const express = require('express');
const router = express.Router();
const feeController = require('../Controller/FeesController');

router.post('/fee', feeController.createFee);
router.get('/fees', feeController.getFees);

module.exports = router;
