const Course = require('../Module/CourseModel')

// const courses = async(req, res)=> {
//     try {
//         const {title, description, instructor, price} = req.body;
//         const studentToken = uuidv4();
//         const newStudent = new Course({title, description, instructor, price})
//         await newStudent.save();
//         res.status(201).json({message: "submitted sucessfull"})
//     } catch (error) {
//         res.status(500).json({error: "Server error"})
//     }
// }

exports.createCourse = async(req,res)=>{
    try{
        const model = await Course.create(req.body);
        res.status(201).json(model);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

exports.getCourse = async(req,res)=>{
    try{
        const model = await Course.find(req.params.id);
        res.status(201).json(model);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

exports.getAllCourseById = async(req,res)=>{
    try{
        const model = await Course.findById(req.params.id);
        res.status(201).json(model);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}



exports.deleterCourse = async(req,res)=>{
    try{
        const model = await Course.findByIdAndDelete(req.params.id);
        res.status(201).send();
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

exports.updateCourse = async(req,res)=>{
    try{
        const model = await Course.findByIdAndUpdate(req.params.id, req.body,{new:true});
        res.status(201).json(model);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}


