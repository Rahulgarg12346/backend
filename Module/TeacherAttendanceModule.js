const mongoose = require("mongoose")
const teacherAttendanceSchema = new mongoose.Schema({

  attendance_date: {
    type: Date,
    default: Date.now(),
  },

  teachers: [
    {
      teacher_name: {
        type: String,
        required: true,
      },

      teacherId: {
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

const TeacherAttendances = mongoose.model( 'TeacherAttendance',teacherAttendanceSchema)
module.exports = TeacherAttendances;