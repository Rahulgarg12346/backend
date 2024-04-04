





const mongoose = require ('mongoose');
const studentschema = new mongoose.Schema({
    StudentName:{type:String, require:true},
    FatherName:{type:String, require:true},
    MotherName:{type:String, require:true},
    // StudentNumber:{type:Number, require:true},
    // StudentID:{type:Number, require:true,unique: true},
    Emailid:{type:String, require:true, unique:true},
    Gender:{type:String, require:true},
    DOB: {type:String, require:true},
    FatherNumber:{type:Number, require:true, unique:true},
    MotherNumber:{type:Number, require:true, unique:true},
    Password:{type:String, require:true},
    Classestoken:{type:String},
    ClassName:{type:String, require:true},
    BoardName:{type:String, require:true},
    Address :{type:String, require:true},
    State:{type:String, require:true},
    CityName:{type:String, require:true},
    // borrowedBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
    StudentPhoto:{type:String},
    token: { type: String }

})


const Student = mongoose.model('newstudent',studentschema);
module.exports = Student;
// module.exports = Student;





    