const mongoose = require("mongoose")
const teacherAttendanceSchema = new mongoose.Schema({

  attendance_date: {
    type: Date,
    default: Date.now(),
  },

  student: [
    {
      teacher_name: {
        type: String,
        required: true,
      },

      studenttoken: {
        type: Number,
        required: true,
      },   
      subject_name: {
        type: Number,
        required: true,
      },
      present: {
        type: Boolean,
        default: false,
        required: true,
      },
    },
    {
      timestamps: true,
    },
  ],
  token: {type:String}
})

const studentAttendances = mongoose.model( 'studentAttendance',teacherAttendanceSchema)
module.exports = studentAttendances;