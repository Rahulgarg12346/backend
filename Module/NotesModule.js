const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
    Classtoken: {
        type: String,
        required: true
    },
    TeacherNotes: {
        type: String,
        required: true
    },
    Subject: {
        type: String,
        required: true
    },
    Classname: {
        
        type: String,
        required: true,
        enum:['class1','class2','class3','class4','class5','class6','class7','class8']

    },
    NotesPhoto: {
        type: String,
    },
    Description: {
        type: String,
        required: true
    },
    NotesToken: {
        type: String
    }
    
});

const Note = mongoose.model('Notes', noteSchema);

module.exports = Note;
