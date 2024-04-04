// exports.studentsRegistrationValidator = [
//     body('StudentName').notEmpty().withMessage('Student Name is required'),
//     body('FatherName').notEmpty().withMessage('Father Name is required'),
//     body('MotherName').notEmpty().withMessage('Mother Name is required'),
//     body('Emailid').isEmail().trim().escape().normalizeEmail().withMessage('Invalid email format'),
//     body('Gender').notEmpty().withMessage('Gender is required'),
//     body('DOB').isISO8601().withMessage('Invalid Date of Birth format'),
//     body('ClassName').notEmpty().withMessage('Class Name is required'),
//     body('BoardName').notEmpty().withMessage('Board Name is required'),
//     body('Address').notEmpty().withMessage('Address is required'),
//     body('State').notEmpty().withMessage('State is required'),
//     body('FatherNumber').isNumeric().isLength({ min: 10, max: 10 }).withMessage('Invalid Father\'s contact number'),
//     body('MotherNumber').isNumeric().isLength({ min: 10, max: 10 }).withMessage('Invalid Mother\'s contact number'),
//     body('Password').isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
//     body('Password').matches(/^(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/).withMessage('Password must contain at least one special character'),
//     body('Classestoken').notEmpty().withMessage('Class Token is required'),
//     body('CityName').notEmpty().withMessage('City Name is required')
// ];
