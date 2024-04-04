const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

    category: {
        type: String,
        enum:['libraries','Labimages','sport' ,'schoolclass', 'SchoolCampus','Calender']
    },
    imageUrl: String
});

module.exports = mongoose.model('Post', postSchema);
