const mongoose = require('mongoose')
const hometextSchema = new mongoose.Schema({
    heading:{
        type:String,
        enum:['select','welcome text']
    },
    text:{
        type:String,

    }
})
const Text = mongoose.model('homepagetext', hometextSchema)
module.exports = Text;