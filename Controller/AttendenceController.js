const Attendance = require('../Module/AttendenceModule');

exports.markAttendance = async (req, res) => {
    try {
      const { StudentId, StudentName, Date, IsPresent } = req.body;
  
      const attendance = await Attendance.create({
        StudentId, StudentName, Date, IsPresent 
      });
  
       
      res.status(201).json(attendance);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error', details: error.message });
    }
  };
  

// Controller to update attendance (PUT request)
exports.updateAttendance = async (req, res) => {
  try {
    const { id } = req.params;
    const { isPresent } = req.body;

    const attendance = await Attendance.findByIdAndUpdate(id, { isPresent }, { new: true });

    if (!attendance) {
      return res.status(404).json({ error: 'Attendance not found' });
    }

    res.status(200).json({ message: 'Attendance updated successfully', attendance });
  } catch (error) {
    console.error('Error updating attendance:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Controller to get attendance for a student (GET request)
exports.getAttendance = async (req, res) => {
  try {
    const { studentId } = req.params;

    const attendance = await Attendance.find({ studentId });

    res.status(200).json(attendance);
  } catch (error) {
    console.error('Error fetching attendance:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
