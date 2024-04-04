const calanderphotoes = require('../Module/CalanderPhotoModule');
// const { v4: uuidv4 } = require('uuid');

const uploadImage = async (req, res) => {
  try {
    let CalanderPhoto;


    if (req.file) {
        CalanderPhoto = `${req.file.filename}`;
    }
    

    const newImage = new calanderphotoes({
        CalanderPhoto,
      
    });

    const savedImage = await newImage.save();
    res.status(201).json(savedImage);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

const getAllImages = async (req, res) => {
  try {
    const images = await calanderphotoes.find();
    res.json(images);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};


module.exports = {
  uploadImage,
  getAllImages,
};

