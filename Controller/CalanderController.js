const CalendarEvent = require('../Module/CalanderModule');
const multer = require('multer');

// Get all events
exports.getAllEvents = async (req, res) => {
    try {
        const events = await CalendarEvent.find();
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'upload/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});
const upload = multer({ storage: storage }).single('Photo');;

exports.createEvent = async (req, res) => {
    upload(req,res, async(err)=>{
        if (err){
            console.error(err);
            return res.status(500).send('server error');
        }
    try {
        const { title, date, description } = req.body;
        // const photo = req.file.filename;
        
      const PhotoPath = req.file ? req.file.path : '';
        const newEvent = new CalendarEvent({ 
            title, 
            date,
            description,
            PhotoPath
             });
        await newEvent.save();
        res.status(201).json(newEvent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
    
   });
}


// Update an existing event
exports.updateEvent = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, date, description } = req.body;
        const updatedEvent = await CalendarEvent.findByIdAndUpdate(id, { title, date, description }, { new: true });
        res.status(200).json(updatedEvent);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete an event
exports.deleteEvent = async (req, res) => {
    try {
        const { id } = req.params;
        await CalendarEvent.findByIdAndDelete(id);
        res.status(204).end();
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};
