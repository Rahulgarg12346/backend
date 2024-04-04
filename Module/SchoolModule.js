// const mongoose = require ('mongoose');
// // student------------------------------------
// const studentschema = new mongoose.Schema({
//     StudentName:{type:String, require:true},
//     FatherName:{type:String, require:true},
//     MotherName:{type:String, require:true},
//     StudentNumber:{type:Number, require:true},
//     StudentID:{type:Number, require:true,unique: true},
//     Emailid:{type:String, require:true},
//     ClassName:{type:String, require:true},
//     BoardName:{type:String, require:true},
//     Address :{type:String, require:true},
//     State:{type:String, require:true},
//     FatherNumber:{type:String, require:true},
//     MotherNumber:{type:String, require:true},
//     Password:{type:String, require:true},
//     CityName:{type:String, require:true},
//     borrowedBooks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }],
//     token:{type:String, require:true}
  
// })


// // teacher.....................................................
// const teacherSchema= new mongoose.Schema({
//     Name:{type:String, require:true},
//     number:{type:Number, require:true, unique: true},
//     Address:{type:String, require:true},
//     exprence:{type:String, require:true},
//     Emailid:{type:String, require:true, unique: true},
//     Password:{type:String, require:true},
//     State:{type:String, require:true},
//     classes:{type:String, require:true},
//     Role:{type:String, require:true},
//     city:{type:String, require:true},
//     pincode:{type:String, require:true},
//     token:{type:String, require:true}
// })
// // const user = mongoose.model('user', userschema);



// // ------------library ---------------
// const LibrarySchema = new mongoose.Schema({
//     BookName: {type: String, require:true},
//     BookTitle: {type: String, require:true},
//     Bookauthor: {type: String, require:true},
//     Bookprice: {type: String, require:true},
//     Bookstate: {type: String, require:true},
//     token: {type: String, require:true},
    
// })


//  const bookSchema = new mongoose.Schema({
//     Booktitle: { type: String, required: true },
//     Bookauthor: { type: String, required: true }, 
//     genre: { type: String }, 
//     ISBN: { type: String, unique: true, required: true }, 
//     availableCopies: { type: Number, default: 1 },
//  });
    

// const Student = mongoose.model('studentsdetails',studentschema);
// const Teacher = mongoose.model('Teacher', teacherSchema);
// // const library = mongoose.model('library',LibrarySchema);
// const Book = mongoose.model('bookdetails',bookSchema)
// module.exports = {Student,Teacher,Book}