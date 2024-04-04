const cloudinary = require('cloudinary').v2;
const Image = require('../Module/GalleryModule'); // Assuming your model file is GalleryModule.js
const multer = require('multer');

// Configure multer storage
const storage = multer.diskStorage({
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

// Initialize multer upload with the configured storage
const upload = multer({ storage: storage }).single('img');

// Configure Cloudinary
cloudinary.config({
  cloud_name: 'djrh8oflc',
  api_key: '544113442678141',
  api_secret: 'G6AKEYGFz2eiEcVHXg-4myu5cXg'
});

// Controller function to upload a photo
exports.uploadPhoto = async (req, res) => {
  // Use multer to handle file upload
  upload(req, res, async (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server Error');
    }
    try {
      // Extract data from request body
      const { category, text } = req.body;
      
      // Upload image to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path);
      
      // Create a new image document
      const newImage = new Image({ category, text, img: result.secure_url });
      
      // Save the new image document to the database
      const savedImage = await newImage.save();
      
      // Respond with the saved image data
      res.status(201).json(savedImage);
    } catch (error) {
      // Handle errors
      res.status(400).json({ message: error.message });
    }
  });
};

// Controller function to get all photos
exports.getAllPhotos = async (req, res) => {
  try {
    // Fetch all photos from the database
    const photos = await Image.find();
    
    // Respond with the fetched photos
    res.json(photos);
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: error.message });
  }
};

// Controller function to get a photo by its ID
exports.getPhotoById = async (req, res) => {
  try {
    // Find a photo by its ID
    const photo = await Image.findById(req.params.id);
    
    // Check if photo exists
    if (!photo) {
      // Respond with not found message if photo does not exist
      return res.status(404).json({ message: 'Photo not found' });
    }
    
    // Respond with the fetched photo
    res.json(photo);
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: error.message });
  }
};

// Controller function to update a photo by its ID
exports.updatePhoto = async (req, res) => {
  try {
    // Extract data from request body
    const { title, text, img } = req.body;
    
    // Find and update a photo by its ID
    const updatedPhoto = await Image.findByIdAndUpdate(
      req.params.id,
      { title, text, img },
      { new: true }
    );
    
    // Respond with the updated photo
    res.json(updatedPhoto);
  } catch (error) {
    // Handle errors
    res.status(400).json({ message: error.message });
  }
};

// Controller function to delete a photo by its ID
exports.deletePhoto = async (req, res) => {
  try {
    // Find and delete a photo by its ID
    await Image.findByIdAndDelete(req.params.id);
    
    // Respond with success message
    res.json({ message: 'Photo deleted successfully' });
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: error.message });
  }
};
