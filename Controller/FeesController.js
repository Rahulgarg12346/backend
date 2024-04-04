const Fee = require('../Module/FeesModule');

exports.createFee = async (req, res) => {
    try {
        const fee = await Fee.create(req.body);
        res.status(201).json(fee);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.getFees = async (req, res) => {
    try {
        const fees = await Fee.find(req.params.id);
        res.json(fees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
