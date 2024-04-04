// controllers/sliderPhotoController.js
const cloudinary = require('cloudinary').v2;
const SliderPhoto = require('../Module/SliderImageModule');
const multer = require('multer')

 
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
      cb(null, file.originalname)
  }
});

const upload = multer({ storage: storage }).single('imageUrl');


cloudinary.config({
  cloud_name: 'djrh8oflc',
  api_key: '544113442678141',
  api_secret: 'G6AKEYGFz2eiEcVHXg-4myu5cXg'
});

exports.uploadPhoto = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
        console.error(err);
        return res.status(500).send('Server Error');
    }
    try {
      const {title}= req.body;
        const result = await cloudinary.uploader.upload(req.file.path);
        const newPost = new SliderPhoto({ title, imageUrl: result.secure_url });
        const savedPost = await newPost.save();
        res.status(201).json(savedPost);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
  });

};

exports.getAllPhotos = async (req, res) => {
    try {
        const photos = await SliderPhoto.find();
        res.json(photos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getPhotoById = async (req, res) => {
    try {
        const photo = await SliderPhoto.findById(req.params.id);
        if (!photo) {
            return res.status(404).json({ message: 'Photo not found' });
        }
        res.json(photo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updatePhoto = async (req, res) => {
    try {
        const { title, description, imageUrl } = req.body;
        const updatedPhoto = await SliderPhoto.findByIdAndUpdate(req.params.id, { title, description, imageUrl }, { new: true });
        res.json(updatedPhoto);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deletePhoto = async (req, res) => {
    try {
        await SliderPhoto.findByIdAndDelete(req.params.id);
        res.json({ message: 'Photo deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
