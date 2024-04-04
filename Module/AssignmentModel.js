const mongoose = require("mongoose")
const assignmentSchema = new mongoose.Schema({
    Title:{
        type: String,
        require:true
    },
    Description:{
        type: String,
        require:true
    },
    Assign_date:{
        type: String,
        require:true
    },
    Due_date:{
        type: String,
        require:true
    },
    Teacher_token:{
        type: String,
        require:true
    },
    Student_token:{
        type: String,
        require:true
    },
    Assignment_file:{
        type: String,
        
    },
    Date:{
        type: Date,
        default:Date.now
    },
    Assignment_token:{
        type: Date,
        default:Date
    }
});
const Assignment = mongoose.model('assignments', assignmentSchema)
module.exports = Assignment;