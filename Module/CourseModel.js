
const mongoose = require('mongoose');
const CoursesSchema = new mongoose.Schema({
    ClassName: {type: String, require: true },
    Medium: {type: String, require:true},
    BoardPattern: {type: String, require:true},
    CourseFee:  { type: Number, required: true},
  // description: {type:Date,  required: true},
      // Teacher: { type: String, required: true },

});

const Course = mongoose.model('CoursesDetails', CoursesSchema);
module.exports = Course;
