const mongoose = require('mongoose');

const facilitySchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Description: String,
  Location: String,
  Capacity: Number,
  Features: [String],
  Token:  {
    type: String,
    required: true
  }
});

const Facility = mongoose.model('Facility', facilitySchema);

module.exports = Facility;
