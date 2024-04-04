const mongoose = require("mongoose");

const testSchema = new mongoose.Schema({
    Teachertest: {type:String, require:true},
    TestName: {type:String, require:true},
    Deadline: {type:String, require:true},
})
const Test = mongoose.model('Testdetails', testSchema)
module.exports = Test;