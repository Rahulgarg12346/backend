const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({
  StudentId: {
    type: String,
    ref: 'Student',
    required: true,
  },
  StudentName: {
    type: String,
    require:true
  },
  Date: {
    type: Date,
    default: Date.now,
  },
  IsPresent: {
    type: Boolean,
    default: false,
  },
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

module.exports = Attendance;
