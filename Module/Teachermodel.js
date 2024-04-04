
const mongoose = require ('mongoose');


const teacherSchema= new mongoose.Schema({
    Name:{type:String, require:true},
    Number:{type:Number, require:true, unique: true},
    Address:{type:String, require:true},
    Gender:{type:String, require:true},
    Previous_School:{type:String, require:true},
    Emailid:{type:String, require:true, unique: true},
    Password:{type:String, require:true},
    State:{type:String, require:true},
    Classes:{type:String, require:true},
    Role:{type:String, require:true},
    City:{type:String, require:true},
    Pincode:{type:Number, require:true},
    GovernmentID :{type:String, require: true,unique: true},
    Salary :{type:Number, require: true},
    DateOfJoining :{type:String, require: true},
    SubjectCanTeach:{type:String, require:true},
    TeacherPhoto:{type: String, require:true},
    Token:{type:String, require:true},



})
const Teacher = mongoose.model('Newteacher', teacherSchema);
module.exports = Teacher;