const classes = require("../Module/ClassModule")
const { v4: uuidv4 } = require('uuid');


exports.createClass = async (req, res) => {
    try {
        const { ClassName, NumberOfStudent } = req.body;
        const token = uuidv4();


        const newClass = new classes({
            ClassName,
            NumberOfStudent,
            token
        });

        await newClass.save();

        res.status(201).json({ message: 'Class created successfully', class: newClass });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
exports.getClasses = async(req,res)=>{
    try{
        const Studentclass = await classes.find(req.params.id);
        res.status(201).json(Studentclass);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}


exports.getAllClassesById = async(req,res)=>{
    try{
        const Studentclass = await classes.findById(req.params.id);
        res.status(201).json(Studentclass);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}



exports.deleterClasses = async(req,res)=>{
    try{
        const Studentclass = await classes.findByIdAndDelete(req.params.id);
        res.status(201).send();
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

exports.updateClasses = async(req,res)=>{
    try{
        const Studentclass = await classes.findByIdAndUpdate(req.params.id, req.body,{new:true});
        res.status(201).json(Studentclass);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}
