const mongoose = require('mongoose')
const labSchema = new mongoose.Schema({
    name: String,
    description: String,
    Img: String
})
const labimg = mongoose.model('Labimages', labSchema)
module.exports = labimg;