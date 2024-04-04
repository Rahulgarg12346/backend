const {v4: uuidv4} = require('uuid')
const Subject = require('../Module/SubjectModule')
 
exports.createSubject = async(req,res)=>{
    try{
        const {Section, SubjectCode, SubjectName, TotalClasses, Year, Attendance,  token= uuidv4() }= req.body;
        const subject = new Subject({Section, SubjectCode, SubjectName, TotalClasses, Year, Attendance,  token})
        await subject.save();
        res.status(201).json(subject);

    }catch(err){
        res.status(400).json({message: err.message});
    }
    
};

exports.get_Subject = async(req, res)=>{
    try{
        const subject = await Subject.find(req.params.id);
        res.json(subject);
    }catch (err){
        res.status(500).json({message:err.message});

    }
};

exports.getAll_Subject= async (req, res)=>{
    try{
        const subject = await Subject.findById(req.params.id);
        if(!subject){
            return res.status(404).json({message: 'attendance not found'});

        }res.json(subject);
    }catch(err){
        res.status(500).json({message:err.message});
    }
};
  
exports.updateStudent = async(req, res)=>{
    try{
        const Studentclass = await Subject.findByIdAndUpdate(req.params.id, req.body,{new:true});
        res.status(201).json(Studentclass);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}


exports.deleteStudent = async(req,res)=>{
    try{
        const Studentclass = await Subject.findByIdAndDelete(req.params.id);
        res.status(201).send();
    }catch(error){
        res.status(500).json({error: error.message});
    }
}