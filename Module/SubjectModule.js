const mongoose = require("mongoose")
const subjectSchema = new mongoose.Schema({
    Section:{
        type:String,
        require:true
    },
    SubjectCode:{
        type:String,
        require:true
    },
    SubjectName:{
        type:String,
        require:true
    },
    TotalClasses:{
        type:String,
        require:true
    },
    Year:{
        type:String,
        require:true
    },
    Attendance:{
        type:String,
        require:true
    }
});
const Subject = mongoose.model('Subjects',subjectSchema)
module.exports =Subject;