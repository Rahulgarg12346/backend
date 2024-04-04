const mongoose = require('mongoose');


const transportSchema = new mongoose.Schema({
  VehicleNumber: {
    type: String,
    required: true
  },
  DriverName: String,
  Capacity: Number,
  Route: String,
  Token: {
    type: String,
    required: true}
});

const Transport = mongoose.model('Transport', transportSchema);

module.exports = Transport;
