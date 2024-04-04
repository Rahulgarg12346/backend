const mongoose = require('mongoose');

const activitySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  // participants: [{
  //   type:String,
  //   require:true
  // }]
});

const Activity = mongoose.model('Activity', activitySchema);

module.exports = Activity;
