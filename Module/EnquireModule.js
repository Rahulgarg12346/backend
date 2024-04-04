const mongoose = require("mongoose");
const EnquireSchema = new mongoose.Schema({
    Name:{
        type:String, require:true
    },
    Email:{
        type:String, require:true, unique:true
    },
    Number:{
        type:String, require:true, unique:true
    },
    EnquireDescription:{
        type:String, require:true
    },
    EnquireToken: {
        type: String,
    }
    
})
const enquire = mongoose.model('enquiredetails', EnquireSchema)
module.exports= enquire;