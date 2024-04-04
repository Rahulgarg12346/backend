
const mongoose = require('mongoose');

const sliderPhotoSchema = new mongoose.Schema({
    title: {type:String,
    },
    imageUrl: String
});
const SliderPhoto = mongoose.model('SliderPhoto', sliderPhotoSchema);
module.exports= SliderPhoto;
