const express = require('express')

const router = express.Router();
const AdmitCardController = require('../Controller/AdmitCardController')
router.post('/admitcard',AdmitCardController.createadmitcard)
router.get('/admitcard', AdmitCardController.getadmitcard)
router.get('/admitcard', AdmitCardController.getAllAdmitCardById)
module.exports = router;
