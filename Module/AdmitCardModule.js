const mongoose = require("mongoose")
const AdmitcardSchema =  new mongoose.Schema({
    StudentName :{type:String, require: true},
    RollNumber :{type:String, require: true},
    StudentPhoto :{type:String, require: true},
    StartTime :{type:String, require: true},
    EndTime :{type:String, require: true},
    Date :{type:String, require: true},
    Location :{type:String, require: true},
    
    year :{type:String, require: true},
})
const admitcard = mongoose.model('AdmitCardDetails', AdmitcardSchema);
module.exports = admitcard;