


const StudentGrade = require('../Module/GradeModule');
const { v4: uuidv4 } = require('uuid');

// Create a new student grade
const createStudentGrade = async (req, res) => {
  try {
    const { Studenttoken, Classestoken, grades } = req.body;
    const token = uuidv4(); // Generate a unique token
    const studentGrade = new StudentGrade({ Studenttoken, Classestoken, grades, token });
    await studentGrade.save();
    res.status(201).json(studentGrade);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};



// Get all student grades
const getAllStudentGrades = async (req, res) => {
  try {
    const studentGrades = await StudentGrade.find();
    res.json(studentGrades);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllStudentGrades
};


// Get a single student grade by token
const getStudentGradeByToken = async (req, res) => {
  try {
    const { Studenttoken } = req.params;
    const studentGrade = await StudentGrade.findOne({ Studenttoken });

    if (!studentGrade) {
      return res.status(404).json({ message: 'Student grade not found' });
    }

    res.json(studentGrade);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a student grade
const updateStudentGrade = async (req, res) => {
  try {
    const { Studenttoken, studentClass, grades } = req.body;
    const studentGrade = await StudentGrade.findOneAndUpdate({ Studenttoken }, { studentClass, grades });

    if (!studentGrade) {
      return res.status(404).json({ message: 'Student grade not found' });
    }

    res.json(studentGrade);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a student grade
const deleteStudentGrade = async (req, res) => {
  try {
    const { Studenttoken } = req.params;
    const studentGrade = await StudentGrade.findOneAndDelete({ Studenttoken });

    if (!studentGrade) {
      return res.status(404).json({ message: 'Student grade not found' });
    }

    res.json({ message: 'Student grade deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createStudentGrade,
  getAllStudentGrades,
  getStudentGradeByToken,
  updateStudentGrade,
  deleteStudentGrade
};


