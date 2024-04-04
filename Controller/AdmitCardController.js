const admitcard = require("../Module/AdmitCardModule")
exports.createadmitcard = async(req,res)=>{
    try{
        const model = await admitcard.create(req.body);
        res.status(201).json(model);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

exports.getadmitcard = async(req,res)=>{
    try{
        const model = await admitcard.find(req.params.id);
        res.status(201).json(model);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}

exports.getAllAdmitCardById = async(req,res)=>{
    try{
        const model = await admitcard.findById(req.params.id);
        res.status(201).json(model);
    }catch(error){
        res.status(500).json({error: error.message});
    }
}




