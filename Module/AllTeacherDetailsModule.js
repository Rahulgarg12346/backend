const mongoose = require("mongoose")
const AddTeacherSchema = new mongoose.Schema({
    Name :{type:String, require: true},
    Number :{type:Number, require: true, unique: true},
    Email :{type:String, require: true, unique: true},
    Address :{type:String, require: true},
    GovernmentID :{type:String, require: true,unique: true},
    Salary :{type:String, require: true},
    DateOfJoining :{type:String, require: true},

})
const Addteacher = mongoose.model('AllTeacherdetails', AddTeacherSchema);
module.exports = Addteacher;