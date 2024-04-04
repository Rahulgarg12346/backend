const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const timetableSchema = new mongoose.Schema({
  day: {
    type: String,
    required: true,
  },
  Period: {
    Period1: {
      type: String,
      required: true
    },
    Period2: {
      type: String,
      required: true
    },
    Period3: {
      type: String,
      required: true
    },
    Period4: {
      type: String,
      required: true
    },
    Period5: {
      type: String,
      required: true
    },
    Period6: {
      type: String,
      required: true
    }
  },
  subject: {
    type: String,
    required: true,
  },
  teacher: {
    type: String,
    required: true,
  },
  classroom: {
    type: String,
    required: true,
  },
});

const Timetable = mongoose.model('Timetable', timetableSchema);

module.exports = Timetable;
