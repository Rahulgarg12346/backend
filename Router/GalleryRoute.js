const express = require('express');
const router = express.Router();
const photoController = require('../Controller/GalleryController');

// Route for uploading a photo
router.post('/galleryphotos', photoController.uploadPhoto);

// Route for getting all photos
router.get('/galleryphotos', photoController.getAllPhotos);

// Route for getting a specific photo by ID
router.get('/galleryphotos/:id', photoController.getPhotoById);

// Route for updating a photo by ID
router.put('/galleryphotos/:id', photoController.updatePhoto);

// Route for deleting a photo by ID
router.delete('/galleryphotos/:id', photoController.deletePhoto);

module.exports = router;