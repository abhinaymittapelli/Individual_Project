const Verification = require("../models/Verification");

// Add Verification
const addVerification = async (req, res) => {
  try {
    const verification = await Verification.create(req.body);

    res.status(201).json(verification);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Get Verifications By Medicine
const getVerificationByMedicine = async (req, res) => {
  try {
    const verifications = await Verification.find({
      medicineId: req.params.medicineId
    })
      .populate("userId", "name email")
      .populate("medicineId", "medicineName");

    res.json(verifications);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Get All Verifications
const getAllVerifications = async (req, res) => {
  try {
    const verifications = await Verification.find()
      .populate("userId", "name email")
      .populate("medicineId", "medicineName");

    res.json(verifications);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  addVerification,
  getVerificationByMedicine,
  getAllVerifications
};