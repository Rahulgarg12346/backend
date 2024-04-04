const {v4: uuidv4} = require('uuid')
const TeacherAttendances = require('../Module/TeacherAttendanceModule')
 
exports.createattendance = async(req,res)=>{
    try{
        const {attendance_date, teachers, timestamps, token= uuidv4() }= req.body;
        const attendance = new TeacherAttendances({attendance_date, teachers, timestamps, token})
        await attendance.save();
        res.status(201).json(attendance);

    }catch(err){
        res.status(400).json({message: err.message});
    }
    
};

exports.getT_Attendance = async(req, res)=>{
    try{
        const attendance = await TeacherAttendances.find();
        res.json(attendance);
    }catch (err){
        res.status(500).json({message:err.message});

    }
};

exports.getAllT_Attendance = async (req, res)=>{
    try{
        const attendance = await TeacherAttendances.findById(req.params.id);
        if(!attendance){
            return res.status(404).json({message: 'attendance not found'});

        }res.json(attendance);
    }catch(err){
        res.status(500).json({message:err.message});
    }
};