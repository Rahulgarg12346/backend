const { v4: uuidv4 } = require('uuid');
const Student = require('../Module/Studentmodel');
const cloudinary = require('cloudinary').v2;
const multer = require('multer');
const { validationResult } = require('express-validator');

// Configure Cloudinary
cloudinary.config({
    cloud_name: 'djrh8oflc',
    api_key: '544113442678141',
    api_secret: 'G6AKEYGFz2eiEcVHXg-4myu5cXg'
});

// Set up multer for image uploading
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'upload'); // This will not be used when using Cloudinary
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname); // This will not be used when using Cloudinary
  }
});

const upload = multer({ storage: storage }).single('StudentPhoto');


exports.register = async (req, res) => {
  upload(req, res, async (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Server Error');
    }
    try {
      const {
        StudentName,
        FatherName,
        MotherName,
        Emailid,
        Gender,
        DOB,
        ClassName,
        BoardName,
        Address,
        State,
        FatherNumber,
        MotherNumber,
        Password,
        Classestoken,
        CityName,
        token = uuidv4()
      } = req.body;

      // Create the student object with plain password
      const model = await Student.create({
        StudentName,
        FatherName,
        MotherName,
        Emailid,
        Gender,
        DOB,
        ClassName,
        BoardName,
        Address,
        State,
        FatherNumber,
        MotherNumber,
        Password, // Save the plain password
        Classestoken,
        CityName,
        token,
        StudentPhoto: req.file.path // Assuming req.file.path is the path to the uploaded photo
      });

      res.status(201).json(model);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
};

exports.login = async (req, res) => {
  try {
    const { Emailid, Password } = req.body;

    // Fetch user from the database based on the provided email
    const user = await Student.findOne({ Emailid });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Check the provided password with the password stored in the database
    if (Password !== user.Password) {
      return res.status(401).json({ error: 'Invalid password' });
    }

    // Password is correct
    res.status(200).json({ message: 'Login successful' ,user});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// get all student by class token
exports.getStudentByclassestoken = async (req, res) => {
  const { classestoken } = req.params;

  try {
    if (!classestoken) {
      return res.status(400).json({ error: "Classestoken is required" });
    }
    
    const student = await Student.find({ Classestoken: classestoken });
    
    if (!student) {
      return res.status(404).json({ error: "Student not found" });
    }
  
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// get all student by token
exports.getStudentByToken = async (req, res) => {
  const { token } = req.params;

  try {
      if (!token) {
          return res.status(400).json({ error: "Token is required" });
      }
      
      const student = await Student.find({ token: token });
      
      if (!student) {
          return res.status(404).json({ error: "Student not found" });
      }
      
      res.status(200).json(student);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

// get all Student
exports.getAllStudent = async (req, res) => {
  try {
      const students = await Student.find();
      res.status(200).json(students);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

// update Student
exports.updateStudent = async (req, res) => {
  try {
    const { token } = req.params;
    let updateFields = req.body;

    // Check if image file is uploaded
    if (req.file) {
      // If image is uploaded, update the image field in updateFields
      updateFields = {
        ...updateFields,
        StudentPhoto: req.file.path // Assuming StudentPhoto is the field to store the image path
      };
    }

    const updatedStudent = await Student.findOneAndUpdate({ token: token }, updateFields, { new: true });

    if (!updatedStudent) {
      return res.status(404).json({ error: "Student not found" });
    }

    res.status(200).json(updatedStudent);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// delete student
exports.deleteStudent = async (req, res) => {
  try {
   
      const deletedStudent = await Student.findByIdAndDelete(req.params.id);
      
      if (!deletedStudent) {
          return res.status(404).json({ error: "Student not found" });
      }

      res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};





