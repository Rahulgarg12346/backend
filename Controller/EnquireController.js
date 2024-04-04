const enquire = require('../Module/EnquireModule');
const { validationResult } = require('express-validator');
const { v4: uuidv4 } = require('uuid');



exports.createEnquire = async (req, res) => {
    try{
        const{
            Name, Email, Number, EnquireDescription
        }= req.body;
        const EnquireToken = uuidv4();
        const Enquire = new enquire({
            Name, Email, Number, EnquireDescription, EnquireToken
        })
        const createEnquire = await Enquire.save();
        res.status(201).json(createEnquire);
    }
    catch(error){
        res.status(500).json({error:error.message});
    }};
//     try {
//         const { Name, Email, Number, EnquireDescription } = req.body;

//         const existingEnquire = await enquire.findOne({ $or: [{ Email }, { Number }] });
//         if (existingEnquire) {
//             return res.status(400).json({ message: 'Email or Number already exists' });
//         }

//         const enquireToken = uuidv4();
//         const enquire = new Enquire({
//             Name,
//             Email,
//             Number,
//             EnquireDescription,
//             EnquireToken: enquireToken
//         });

//         await enquire.save();

//         res.status(201).json({ message: 'Enquire created successfully', enquire });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };



exports.getEnquires = async (req, res) => {
    try {
        const enquires = await enquire.find();
        res.json(enquires);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getEnquireById = async (req, res) => {
    try {
        const enquire = await enquire.findById(req.params.id);
        if (enquire) {
            res.json(enquire);
        } else {
            res.status(404).json({ message: 'Enquire not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.updateEnquire = async (req, res) => {
    try {
        const { Name, Email, Number, EnquireDescription } = req.body;
        const updatedEnquire = await enquire.findByIdAndUpdate(req.params.id, {
            Name,
            Email,
            Number,
            EnquireDescription
        }, { new: true });

        if (updatedEnquire) {
            res.json(updatedEnquire);
        } else {
            res.status(404).json({ message: 'Enquire not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.deleteEnquire = async (req, res) => {
    try {
        const deletedEnquire = await enquire.findByIdAndDelete(req.params.id);
        if (deletedEnquire) {
            res.json({ message: 'Enquire deleted successfully' });
        } else {
            res.status(404).json({ message: 'Enquire not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
