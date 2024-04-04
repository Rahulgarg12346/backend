const Text = require('../Module/HomepagetextModule');

// Controller function to create new text
async function createText(req, res, next) {
    try {
        const { heading, text } = req.body;
        const newText = await Text.create({ heading, text });
        res.status(201).json(newText);
    } catch (error) {
        next(error);
    }
}

// Controller function to get all texts
async function getAllTexts(req, res, next) {
    try {
        const texts = await Text.find();
        res.json(texts);
    } catch (error) {
        next(error);
    }
}

// Controller function to get text by ID
async function getTextById(req, res, next) {
    try {
        const { id } = req.params;
        const text = await Text.findById(id);
        if (!text) {
            return res.status(404).json({ message: 'Text not found' });
        }
        res.json(text);
    } catch (error) {
        next(error);
    }
}

// Controller function to update text by ID
async function updateTextById(req, res, next) {
    try {
        const { id } = req.params;
        const { heading, text } = req.body;
        const updatedText = await Text.findByIdAndUpdate(id, { heading, text }, { new: true });
        if (!updatedText) {
            return res.status(404).json({ message: 'Text not found' });
        }
        res.json(updatedText);
    } catch (error) {
        next(error);
    }
}

// Controller function to delete text by ID
async function deleteTextById(req, res, next) {
    try {
        const { id } = req.params;
        const deletedText = await Text.findByIdAndDelete(id);
        if (!deletedText) {
            return res.status(404).json({ message: 'Text not found' });
        }
        res.json({ message: 'Text deleted successfully' });
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createText,
    getAllTexts,
    getTextById,
    updateTextById,
    deleteTextById
};