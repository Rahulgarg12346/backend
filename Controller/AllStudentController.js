const Student = require('../Module/AllStudentModule');

exports.createStudent = async (req, res) => {
  try {
    const { StudentName, Email,Subject, Board } = req.body;

    const student = new Student({
      StudentName,
      Email,
      Subject,
      Board
    });

    await student.save();

    res.status(201).json({ message: 'Student created successfully' });
  } catch (error) {
    console.error('Error creating student:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};

// Controller to get all students (GET request)
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();

    res.status(200).json(students);
  } catch (error) {
    console.error('Error fetching students:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};

// Controller to update a student (PUT request)
exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    // const { studentName, emailId, password, class, subject, board } = req.body;

    const updatedStudent = await Student.findByIdAndUpdate(
      id,
    //   { studentName, emailId, password, class, subject, board },
      { new: true }
    );

    if (!updatedStudent) {
      return res.status(404).json({ error: 'Student not found' });
    }

    res.status(200).json({ message: 'Student updated successfully', student: updatedStudent });
  } catch (error) {
    console.error('Error updating student:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};

exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedStudent = await Student.findByIdAndDelete(id);

    if (!deletedStudent) {
      return res.status(404).json({ error: 'Student not found' });
    }

    res.status(200).json({ message: 'Student deleted successfully', student: deletedStudent });
  } catch (error) {
    console.error('Error deleting student:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
};
