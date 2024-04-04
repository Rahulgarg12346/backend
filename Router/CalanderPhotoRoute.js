
const express = require('express');
const multer = require('multer');
const imgController = require('../Controller/CalanderPhotoController');
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload/');
  },

  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const upload = multer({ storage: storage });
 
router.post('/Calanderphoto',upload.single('CalanderPhoto'), imgController.uploadImage);


router.get('/Calanderphoto', imgController.getAllImages);

module.exports = router;

