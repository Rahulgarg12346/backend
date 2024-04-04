// routes/sliderPhotoRoutes.js
const express = require('express');
const router = express.Router();
const sliderPhotoController = require('../Controller/SliderImageController');


router.post('/sliderPhoto', sliderPhotoController.uploadPhoto);
router.get('/sliderPhoto', sliderPhotoController.getAllPhotos);
router.get('/sliderPhoto/:id', sliderPhotoController.getPhotoById);
router.put('/sliderPhoto/:id', sliderPhotoController.updatePhoto);
router.delete('/sliderPhoto/:id', sliderPhotoController.deletePhoto);

module.exports = router;
