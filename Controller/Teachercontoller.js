const { v4: uuidv4 } = require('uuid');
const Teacher = require('../Module/Teachermodel');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;

// Multer configurations
const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});

const upload = multer({ storage: storage }).single('TeacherPhoto');

// Cloudinary configurations
cloudinary.config({
    cloud_name: 'djrh8oflc',
    api_key: '544113442678141',
    api_secret: 'G6AKEYGFz2eiEcVHXg-4myu5cXg'
});

// Function to upload image to Cloudinary
const uploadImageToCloudinary = async (imagePath) => {
    try {
        const result = await cloudinary.uploader.upload(imagePath, {
            folder: 'teacher_photos',  // Specify the folder in Cloudinary where you want to store the image
        });
        return result.secure_url;  // Get the secure URL of the uploaded image
    } catch (error) {
        console.error('Error uploading image to Cloudinary:', error);
        throw error;
    }
};

exports.register = async (req, res) => {
    upload(req, res, async (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Server Error');
        }
        try {
            const {
                Name,
                Number,
                Address,
                Gender,
                Previous_School,
                Emailid,
                Password,
                State,
                Classes,
                Role,
                City,
                Pincode,
                GovernmentID,
                Salary,
                DateOfJoining,
                SubjectCanTeach
            } = req.body;

            let teacherPhotoUrl = '';  // Initialize the Cloudinary URL variable

            // Check if there is a file uploaded
            if (req.file) {
                // Upload image to Cloudinary
                const imageUrl = await uploadImageToCloudinary(req.file.path);
                teacherPhotoUrl = imageUrl;  // Use the Cloudinary URL for the teacher photo
            }

            const Token = uuidv4();

            const newTeacher = new Teacher({
                Name,
                Number,
                Address,
                Gender,
                Previous_School,
                Emailid,
                Password,
                State,
                Classes,
                Role,
                City,
                Pincode,
                GovernmentID,
                Salary,
                DateOfJoining,
                SubjectCanTeach,
                TeacherPhoto: teacherPhotoUrl,  // Use Cloudinary URL for TeacherPhoto
                Token
            });

            // Save teacher details in the database
            const savedTeacher = await newTeacher.save();

            res.status(201).json(savedTeacher);
        } catch (error) {
            console.error('Error registering teacher:', error);
            res.status(500).json({ error: error.message });
        }
    });
};

// Other controller functions for retrieving, updating, and deleting teachers remain unchanged...



exports.getAllTeacherById = async (req, res) => {
  try {
    const model = await Teacher.find(req.params.id);
    res.status(200).json(model);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getTeacherById = async (req, res) => {
  try {
    const model = await Teacher.findById(req.params.id);
    res.status(200).json(model);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }       
};

exports.updateTeacher = async (req, res) => {
  try {
    const { id } = req.params; 
    const updatedTeacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedTeacher);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteTeacher = async (req, res) => {
  try {
    const { id } = req.params; 
    await Teacher.findByIdAndDelete(id);
    res.status(200).json({ message: 'Teacher deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// --------------------------Student controller-----------------------------------



// exports.Studentregister = async (req, res) => {
//   upload(req, res, async (err) => {
//       if (err) {
//           console.error(err);
//           return res.status(500).send('Server Error');
//       }
//       try {
//           const {
//               StudentName,
//               FatherName,
//               MotherName,
//               StudentID,
//               Emailid,
//               Gender,
//               DOB,
//               ClassName,
//               BoardName,
//               Address,
//               State,
//               FatherNumber,
//               MotherNumber,
//               Password,
//               CityName,
//           } = req.body;

//           let studentPhotoUrl = '';  // Initialize the Cloudinary URL variable

//           // Check if there is a file uploaded
//           if (req.file) {
//               // Upload image to Cloudinary
//               const imageUrl = await uploadImageToCloudinary(req.file.path);
//               studentPhotoUrl = imageUrl;  // Use the Cloudinary URL for the student photo
//           }

//           const token = uuidv4();

//           const newStudent = new Student({
//               StudentName,
//               FatherName,
//               MotherName,
//               StudentID,
//               Emailid,
//               Gender,
//               DOB,
//               ClassName,
//               BoardName,
//               Address,
//               State,
//               FatherNumber,
//               MotherNumber,
//               Password,
//               CityName,
//               Token: token,
//               StudentPhoto: studentPhotoUrl,  // Use Cloudinary URL for StudentPhoto
//           });

//           // Save student details in the database
//           const savedStudent = await newStudent.save();

//           res.status(201).json(savedStudent);
//       } catch (error) {
//           console.error('Error registering student:', error);
//           res.status(500).json({ error: error.message });
//       }
//   });
// };

// exports.getAllStudent = async (req, res) => {
//   try {
//       const model = await Student.find(req.params.id);
//       res.status(200).json(model);
//   } catch (error) {
//       res.status(500).json({ error: error.message });
//   }
// };

// exports.getStudentById = async (req, res) => {
//   try {
//       const model = await Student.findById(req.params.id);
//       res.status(200).json(model);
//   } catch (error) {
//       res.status(500).json({ error: error.message });
//   }
// };

// exports.updateStudent = async (req, res) => {
//   try {
//       const { id } = req.params;
//       const updatedStudent = await Student.findByIdAndUpdate(id, req.body, { new: true });
//       res.status(200).json(updatedStudent);
//   } catch (error) {
//       res.status(500).json({ error: error.message });
//   }
// };

// exports.deleteStudent = async (req, res) => {
//   try {
//       const { id } = req.params;
//       await Student.findByIdAndDelete(id);
//       res.status(200).json({ message: 'Student deleted successfully' });
//   } catch (error) {
//       res.status(500).json({ error: error.message });
//   }
// };