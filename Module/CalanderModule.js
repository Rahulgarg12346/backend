const mongoose = require('mongoose');

const calendarSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: Date, required: true },
    description: { type: String },
    photo: { type: String } 
});

const Calendar = mongoose.model('Calendar', calendarSchema);

module.exports = Calendar;
