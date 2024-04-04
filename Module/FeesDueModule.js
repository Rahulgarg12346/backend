const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    ClassToken:{
        type:String,
        require:true
    },
    StudentToken:{
        type:String,
        require:true
    },
    ReceiptNum:{
        type:Number,
        require:true
    },
    Feestype:{
        type:String,
        require:true
    },
    totalFees: {
        type: Number,
        required: true
    },
    feesPaid: {
        type: Number,
        required: true
    }, 
    SubmitDate: {
        type: Date,
        required: true
    }, 
    TotalPaidAmount: {
        type: Number,
        required: true
    }, 
    PaymentMode: {
        type: String,
        required: true
    },
    completeFees: {
        type: Boolean,
        default: false 
    },
    
    token: {
        type: String,
     
    }
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;






