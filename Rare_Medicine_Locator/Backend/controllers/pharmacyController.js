const Pharmacy = require("../models/Pharmacy");

// Create Pharmacy
const createPharmacy = async (req, res) => {
  try {
    const pharmacy = await Pharmacy.create(req.body);

    res.status(201).json(pharmacy);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Get All Pharmacies
const getAllPharmacies = async (req, res) => {
  try {
    const pharmacies = await Pharmacy.find();

    res.json(pharmacies);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Get Single Pharmacy
const getPharmacyById = async (req, res) => {
  try {
    const pharmacy = await Pharmacy.findById(req.params.id);

    if (!pharmacy) {
      return res.status(404).json({
        message: "Pharmacy not found"
      });
    }

    res.json(pharmacy);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Update Pharmacy
const updatePharmacy = async (req, res) => {
  try {
    const pharmacy = await Pharmacy.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(pharmacy);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Delete Pharmacy
const deletePharmacy = async (req, res) => {
  try {
    const pharmacy = await Pharmacy.findByIdAndDelete(req.params.id);

    if (!pharmacy) {
      return res.status(404).json({
        message: "Pharmacy not found"
      });
    }

    res.json({
      message: "Pharmacy deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  createPharmacy,
  getAllPharmacies,
  getPharmacyById,
  updatePharmacy,
  deletePharmacy
};