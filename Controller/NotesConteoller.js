const Note = require('../Module/NotesModule');
const { v4: uuidv4 } = require('uuid');
const cloudinary = require('cloudinary').v2;
const multer = require('multer')

cloudinary.config({
  cloud_name: 'djrh8oflc',
  api_key: '544113442678141',
  api_secret: 'G6AKEYGFz2eiEcVHXg-4myu5cXg'
})
 const storage = multer.diskStorage({
  destination: function (req, file, cb){
    cb(null, 'upload');
  },
  filename: function(req, file, cd){
    cd(null, Date.now()+'-'+ file.originalname);
  }
 })
 const upload = multer({storage: storage}).single('NotesPhoto');
const uploadnotesImage = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server Error');
    }
  try {

    const {Classtoken=uuidv4(),TeacherNotes,Subject,Classname,Description,NotesToken=uuidv4()} = req.body;

    const result = await cloudinary.uploader.upload(req.file.path);


    const newImage = new Note({
        Classtoken,
        TeacherNotes,
        Subject,
        Classname,
        NotesPhoto: result.secure_url,
        Description,
        NotesToken
    });

    const savedImage = await newImage.save();
    res.status(201).json(savedImage);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

};

const getAllImages = async (req, res) => {
  try {
    const images = await Note.find();
    res.json(images);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};

// Controller function to delete a note by its ID
const deleteNote = async (req, res) => {
  try {
    const { id } = req.params;

    // Find the note in the database by its ID and delete it
    const deletedNote = await Note.findByIdAndDelete(id);

    if (!deletedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.json({ message: 'Note deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
};





module.exports = {
  uploadnotesImage,
  getAllImages,
  deleteNote

};