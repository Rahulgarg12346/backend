
const {v4:uuidv4} = require('uuid');
const Addteacher = require('../Module/AllTeacherDetailsModule');

exports.AllTeachers = async(req,res)=>{
    
    try{
        const{ Name,
            Number,
            Email,
            Address,
            GovernmentID,
            Salary,
            DateOfJoining,
            token=uuidv4() }= req.body;
        
        const AddNewTeacher = await Addteacher.create({Name,
            Number,
            Email,
            Address,
            GovernmentID,
            Salary,
            DateOfJoining,
            token});
        res.status(201).json(AddNewTeacher);
    }catch(error){  
        res.status(500).json({error: error.message})
    }
}

exports.getAllTeachers = async(req,res)=>{
    try{
        const getAllTeacher = await Addteacher.find(req.params.id);
        res.status(201).json(getAllTeacher);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

exports.getAllTeachersById = async(req,res)=>{
    try{
        const getAllTeacherById = await Addteacher.findById(req.params.id);
        res.status(201).json(getAllTeacherById);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}
exports.updateAllTeacher = async(req,res)=>{
    try{
        const UpdateTeacherDetails = await Addteacher.findByIdAndUpdate(req.params.id, req.body,{new:true});
        res.status(201).json(UpdateTeacherDetails);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}