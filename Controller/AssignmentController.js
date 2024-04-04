const Assignment = require('../Module/AssignmentModule');
const { v4: uuidv4 } = require('uuid');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;

// Multer configurations
const storage = multer.diskStorage({
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});


const upload = multer({ storage: storage });

// Cloudinary configurations
cloudinary.config({
    cloud_name: 'djrh8oflc',
    api_key: '544113442678141',
    api_secret: 'G6AKEYGFz2eiEcVHXg-4myu5cXg'
});

exports.createAssignment = async (req, res) => {
    try {
        const { Title, Description, Assign_date, Due_date, Teacher_token, Student_token } = req.body;
        const file = req.file.path;
        const Assignment_token = uuidv4();

        const errors = [];

        // Upload file to Cloudinary
        const cloudinaryUpload = await cloudinary.uploader.upload(file, { folder: "assignments", resource_type: 'auto' });
        const Assignment_file = cloudinaryUpload.secure_url;

        if (!Title || !Description || !Assign_date || !Due_date || !Teacher_token || !Student_token) {
            errors.push("Please provide all required fields: Title, Description, Assign_date, Due_date, Teacher_token, Student_token");
        }

        if (errors.length > 0) {
            res.status(400).json({ errors });
            return;
        }

        const newAssignment = new Assignment({
            Title,
            Description,
            Assign_date,
            Due_date,
            Teacher_token,
            Student_token,
            Assignment_file,
            Assignment_token
        });

        const savedAssignment = await newAssignment.save();

        if (savedAssignment) {
            res.status(201).json({ message: "Assignment created successfully", assignment: savedAssignment });
        } else {
            res.status(500).json({ error: "Failed to create assignment" });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.getAllAssignments = async (req, res) => {
    try {
        const assignments = await Assignment.find();
        res.status(200).json(assignments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.getAssignmentById = async (req, res) => {
    try {
        const assignment = await Assignment.findById(req.params.id);
        if (!assignment) {
            res.status(404).json({ message: "Assignment not found" });
            return;
        }
        res.status(200).json(assignment);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.updateAssignment = async (req, res) => {
    try {
        const { Title, Description, Assign_date, Due_date, Teacher_token, Student_token } = req.body;
        
        const updatedFields = {};
        if (Title) updatedFields.Title = Title;
        if (Description) updatedFields.Description = Description;
        if (Assign_date) updatedFields.Assign_date = Assign_date;
        if (Due_date) updatedFields.Due_date = Due_date;
        if (Teacher_token) updatedFields.Teacher_token = Teacher_token;
        if (Student_token) updatedFields.Student_token = Student_token;

        const updatedAssignment = await Assignment.findByIdAndUpdate(req.params.id, updatedFields, { new: true });
        if (!updatedAssignment) {
            res.status(404).json({ message: "Assignment not found" });
            return;
        }
        res.status(200).json({ message: "Assignment updated successfully", assignment: updatedAssignment });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

exports.deleteAssignment = async (req, res) => {
    try {
        const deletedAssignment = await Assignment.findByIdAndDelete(req.params.id);
        if (!deletedAssignment) {
            res.status(404).json({ message: "Assignment not found" });
            return;
        }
        res.status(200).json({ message: "Assignment deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};
