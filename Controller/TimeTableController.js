const Timetable = require('../Module/TimeTableModule');
// const bcrypt = require('bcrypt');

exports.createTimetableEntry = async (req, res) => {
  try {
    const { day, Period, subject, teacher, classroom } = req.body;

    const timetableEntry = new Timetable({
      day,
      Period,
      subject,
      teacher,
      classroom
    });

    await timetableEntry.save();

    res.status(201).json({ message: 'Timetable entry created successfully' });
  } catch (error) {
    console.error('Error creating timetable entry:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};

exports.getTimetableByDay = async (req, res) => {
  try {
    // const { day } = req.params;

    const timetable = await Timetable.find(req.params.id);

    res.status(200).json(timetable);
  } catch (error) {
    console.error('Error fetching timetable:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};

exports.updateTimetableEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const { day, period, subject, teacher, classroom } = req.body;

    const updatedTimetableEntry = await Timetable.findByIdAndUpdate(
      id,
      { day, period, subject, teacher, classroom },
      { new: true }
    );

    if (!updatedTimetableEntry) {
      return res.status(404).json({ error: 'Timetable entry not found' });
    }

    res.status(200).json({ message: 'Timetable entry updated successfully', timetableEntry: updatedTimetableEntry });
  } catch (error) {
    console.error('Error updating timetable entry:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};

exports.deleteTimetableEntry = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedTimetableEntry = await Timetable.findByIdAndDelete(id);

    if (!deletedTimetableEntry) {
      return res.status(404).json({ error: 'Timetable entry not found' });
    }

    res.status(200).json({ message: 'Timetable entry deleted successfully', timetableEntry: deletedTimetableEntry });
  } catch (error) {
    console.error('Error deleting timetable entry:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};
