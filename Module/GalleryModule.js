const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  category: {
    type: String,
    enum:['about', 'Admission text','Home lab', 'Home Liberary', 'Home sports','Home class']
  },
  text: {
    type: String,
  },
  img: {  
    type: String,
  },

 
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;