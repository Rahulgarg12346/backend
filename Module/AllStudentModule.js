const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  StudentName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  // password: {
  //   type: String,
  //   required: true,
  // },
//   class: {
//     type: String,
//     required: true,
//   },
  Subject: {
    type: String,
    required: true,
  },
  Board: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
