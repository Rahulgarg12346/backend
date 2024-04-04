const express = require('express');
const router = express.Router();
const transportController = require('../Controller/TransportController');

router.post('/transport', transportController.createTransport);
router.get('/transport', transportController.getAllTransports);
router.get('/transport/:id', transportController.getTransport);
router.put('/transport/:id', transportController.updateTransport);
router.delete('/transport/:id', transportController.deleteTransport);

module.exports = router;
