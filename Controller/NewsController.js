const Notice = require('../Module/NewsModule');

// Controller function to create a new notice
exports.createNotice = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNotice = new Notice({
      title,
      content,
    });
    await newNotice.save();
    res.status(201).json({ message: 'Notice created successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to get all notices
exports.getAllNotices = async (req, res) => {
  try {
    const notices = await Notice.find().sort({ createdAt: -1 });
    res.json(notices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller function to update a notice
// exports.updateNotice = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const { title, content } = req.body;
//     const updatedNotice = await Notice.findByIdAndUpdate(id, { title, content }, { new: true });
//     if (!updatedNotice) {
//       return res.status(404).json({ message: 'Notice not found' });
//     }
//     res.json({ message: 'Notice updated successfully', notice: updatedNotice });
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// };

// Controller function to delete a notice
exports.deleteNotice = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNotice = await Notice.findByIdAndDelete(id);
    if (!deletedNotice) {
      return res.status(404).json({ message: 'Notice not found' });
    }
    res.json({ message: 'Notice deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
