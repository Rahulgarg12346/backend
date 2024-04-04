// Import necessary modules
const Student = require('../Module/FeesDueModule');
const { v4: uuidv4 } = require('uuid');

// Create a new student
exports.createStudent = async (req, res) => {
    try {
        // Destructure request body
        const {
            ClassNameToken,
            Feestype,
            name,
            className,
            totalFees,
            feesPaid,
            SubmitDate,
            TotalPaidAmount,
            PaymentMode,
        } = req.body;

        // Fetch the latest student
        const latestStudent = await Student.findOne().sort({ ReceiptNum: -1 });

        // Calculate the next receipt number
        const nextReceiptNum = latestStudent ? parseInt(latestStudent.ReceiptNum.split('-').pop()) + 1 : 1;

        // Format the receipt number
        const formattedReceiptNum = `RKSRN-${nextReceiptNum}`;

        // Generate a unique token using UUID
        const token = uuidv4();

        // Create a new student object
        const newStudent = new Student({
            ClassNameToken,
            Feestype,
            name,
            className,
            totalFees,
            feesPaid,
            SubmitDate,
            TotalPaidAmount,
            PaymentMode,
            token, // Assign the generated token to the student
            ReceiptNum: formattedReceiptNum // Assign the formatted receipt number to the student
        });

        // Save the new student to the database
        const savedStudent = await newStudent.save();

        // Respond with success message and the newly created student record
        res.status(201).json({ message: 'Student created successfully', student: savedStudent });
    } catch (error) {
        // If an error occurs during creation, respond with an error message
        res.status(400).json({ error: error.message });
    }
};





// Get all students with due fees by token
exports.getAllStudents = async (req, res) => {
    try {
        const students = await Student.find();

        const studentsWithAdditionalInfo = students.map(student => {
            const { totalFees, feesPaid } = student;
            const dueFees = totalFees - feesPaid;
            const isHalfPaid = feesPaid >= totalFees / 2;
            const completeFees = feesPaid === totalFees;

            // Return the original student object along with additional info
            return {
                ...student.toObject(), // Convert Mongoose document to plain JavaScript object
                dueFees,
                isHalfPaid,
                completeFees
            };
        });

        res.status(200).json({ message: 'Students retrieved successfully', students: studentsWithAdditionalInfo });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Get one student by Token
exports.getStudentByToken = async (req, res) => {
    try {
        const { token } = req.query; // Assuming token is in query parameters
        const student = await Student.findOne({ StudentToken: token });
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Student retrieved successfully', student });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update student by Token
exports.updateStudentByToken = async (req, res) => {
    try {
        const { token } = req.query; // Assuming token is in query parameters
        const student = await Student.findOneAndUpdate({ StudentToken: token }, req.body, { new: true });
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Student updated successfully', student });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete student by Token
exports.deleteStudentByToken = async (req, res) => {
    try {
        const { token } = req.params; // Assuming token is in URL parameters
        const student = await Student.findOneAndDelete({ StudentToken: token });
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
