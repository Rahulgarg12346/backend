const mongoose = require('mongoose')
const ClassSchema = new mongoose.Schema({
    ClassName:{type: String, trim: true, minlength:3},
    NumberOfStudent:{type: String, trim: true, minlength:0},
    token:{
        type:String
    }
})
const classes = mongoose.model('classDetails', ClassSchema)
module.exports= classes;

