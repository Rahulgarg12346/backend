const { v4: uuidv4 } = require('uuid');
const Facility = require('../Module/FacilityModule');

// Create a new facility
const createFacility = async (req, res) => {
  try {
    const Token = uuidv4(); // Generate a unique token
    const facilityData = { ...req.body, Token }; // Add token to facility data
    const facility = new Facility(facilityData);
    await facility.save();
    res.status(201).json(facility);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all facilities
const getAllFacilities = async (req, res) => {
  try {
    const facilities = await Facility.find();
    res.json(facilities);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single facility
const getFacility = async (req, res) => {
  try {
    const facility = await Facility.findById(req.params.id);
    if (!facility) {
      return res.status(404).json({ message: 'Facility not found' });
    }
    res.json(facility);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update a facility
const updateFacility = async (req, res) => {
  try {
    const facility = await Facility.findByIdAndUpdate(req.params.id);
    if (!facility) {
      return res.status(404).json({ message: 'Facility not found' });
    }
    Object.assign(facility, req.body);
    await facility.save();
    res.json(facility);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete a facility
const deleteFacility = async (req, res) => {
  try {
    const facility = await Facility.findByIdAndDelete(req.params.id);
    if (!facility) {
      return res.status(404).json({ message: 'Facility not found' });
    }
    await facility.remove();
    res.json({ message: 'Facility deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createFacility,
  getAllFacilities,
  getFacility,
  updateFacility,
  deleteFacility
};
