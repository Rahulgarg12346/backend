const mongoose = require('mongoose');

const studentGradeSchema = new mongoose.Schema({
  Studenttoken: { type: String, required: true },
  Classestoken: { type: String, required: true },
  // Student_name: { type: String, required: true },
  // studentClass: { type: String, required: true },
  grades: {
    english: { type: String, required: true },
    hindi: { type: String, required: true },
    math: { type: String, required: true },
    science: { type: String, required: true },
    social_science: { type: String, required: true },
    sanskrit: { type: String, required: true }
  },
  token: { type: String, required: true }
});

module.exports = mongoose.model('StudentGrade', studentGradeSchema);
