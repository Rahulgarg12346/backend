const {v4: uuidv4} = require('uuid')
const studentAttendances = require('../Module/StudentAttendanceModule')
 
exports.createStudent = async(req,res)=>{
    try{
        const {attendance_date, student, timestamps, token= uuidv4() }= req.body;
        const attendance = new studentAttendances({attendance_date, student, timestamps, token})
        await attendance.save();
        res.status(201).json(attendance);

    }catch(err){
        res.status(400).json({message: err.message});
    }
    
};

exports.getA_student = async(req, res)=>{
    try{
        const attendance = await studentAttendances.find();
        res.json(attendance);
    }catch (err){
        res.status(500).json({message:err.message});

    }
};

exports.getAllA_student = async (req, res)=>{
    try{
        const attendance = await studentAttendances.findById(req.params.id);
        if(!attendance){
            return res.status(404).json({message: 'attendance not found'});

        }res.json(attendance);
    }catch(err){
        res.status(500).json({message:err.message});
    }
};