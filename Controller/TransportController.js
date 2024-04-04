const { v4: uuidv4 } = require('uuid');
const Transport = require('../Module/TransportModule');

// Create a new transport
const createTransport = async (req, res) => {
  try {
    const Token = uuidv4(); // Generate a unique token
    const transportData = { ...req.body, Token }; // Add token to transport data
    const transport = new Transport(transportData);
    await transport.save();
    res.status(201).json(transport);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all transports
const getAllTransports = async (req, res) => {
  try {
    const transports = await Transport.find();
    res.json(transports);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single transport
const getTransport = async (req, res) => {
  try {
    const transport = await Transport.findById(req.params.id);
    if (!transport) {
      return res.status(404).json({ message: 'Transport not found' });
    }
    res.json(transport);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a transport
const updateTransport = async (req, res) => {
  try {
    const transport = await Transport.findById(req.params.id);
    if (!transport) {
      return res.status(404).json({ message: 'Transport not found' });
    }
    Object.assign(transport, req.body);
    await transport.save();
    res.json(transport);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a transport
const deleteTransport = async (req, res) => {
  try {
    const transport = await Transport.findById(req.params.id);
    if (!transport) {
      return res.status(404).json({ message: 'Transport not found' });
    }
    await transport.remove();
    res.json({ message: 'Transport deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createTransport,
  getAllTransports,
  getTransport,
  updateTransport,
  deleteTransport
};
