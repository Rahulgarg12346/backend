const mongoose = require ('mongoose');
// ------------library ---------------
const StudentSchema = new mongoose.Schema({
    StudentName: {type: String, require:true},
    StudentId: {type: String, require:true, unique: String},
    BookName: {type: String, require:true},
    BookAuthor: {type: String, require:true},
    MobileNumber: {type: Number, require:true, unique: String},
    
    StudentClassName: {type: String, require:true},
    BookLanguage: {type: String, require:true},
    borrowedBooks: [{ type: mongoose.Schema.Types.ObjectId,
      ref: 'Book' }],

    // email: {type: String, require:true, unique:true},
    // Password: {type: String, require:true},
    // Bookprice: {type: String, require:true},
    // Bookstate: {type: String, require:true},
    token: {type: String, require:true}
    
})


 const bookSchema = new mongoose.Schema({
    BookAuthor: { type: String, required: true }, 
    BookName: {type: String, require:true},
    BookLanguage: {type: String, require:true},
    // BookYear: {type: String, require:true},
    // Genre: { type: String, require:true }, 
    // ISBN: { type: String, unique: true, required: true }, 
    // AvailableBooks: { type: Number, default: 1 },
        // Bookprice: {type: String, require:true},


 });
    
//  const memberSchema = new mongoose.Schema({
//      firstName: { type: String, required: true }, 
//      lastName: { type: String, required: true }, 
//      email: { type: String, unique: true, required: true },
//       borrowedBooks: [{ type: mongoose.Schema.Types.ObjectId,
//          ref: 'Book' }],  });

 const transactionSchema = new mongoose.Schema({ 
            Student: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
             book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true }, 
             borrowDate: { type: Date, default: Date.now },
              returnDate: { type: Date },
               returned: { type: Boolean, default: false },
             }); 


            //  const studentSchema = new mongoose.Schema({
            //     firstName: {
            //       type: String,
            //       required: true,
            //     },
            //     lastName: {
            //       type: String,
            //       required: true,
            //     },
            //     email: {
            //       type: String,
            //       required: true,
            //       unique: true,
            //     },
            //     dateOfBirth: {
            //       type: Date,
            //       required: true,
            //     },
            //     grade: {
            //       type: String,
            //       required: true,
            //     },
            //     // Add more fields specific to students
            //   });
              
              // Create a model using the schema
              // const Student = mongoose.model('Student', studentSchema);

// const Student = mongoose.model('studentsdetails',studentschema);
const library = mongoose.model('library',StudentSchema);
const Book = mongoose.model('bookdetails',bookSchema);
// const Member = mongoose.model('Member', memberSchema); 
const transaction = mongoose.model('transaction', transactionSchema)



module.exports = {library ,Book,transaction};

