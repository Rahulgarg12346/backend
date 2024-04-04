const mongoose = require("mongoose")
const calanderSchema = new mongoose.Schema({
    CalanderPhoto:{
        type: String,
        require: true
    }
});
const calanderphotoes = mongoose.model('calanderphotoes', calanderSchema)
module.exports = calanderphotoes;

