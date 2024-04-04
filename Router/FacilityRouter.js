const express = require('express');
const router = express.Router();
const facilityController = require('../Controller/FacilityController');

router.post('/facility', facilityController.createFacility);
router.get('/facilityget', facilityController.getAllFacilities);
router.get('/facilityget/:id', facilityController.getFacility);
router.put('/facilityupdate/:id', facilityController.updateFacility);
router.delete('/facilitydelete/:id', facilityController.deleteFacility);

module.exports = router;
