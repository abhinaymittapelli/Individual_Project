const User = require("../models/User");
const Pharmacy = require("../models/Pharmacy");
const Medicine = require("../models/Medicine");

const getAllUsers = async (req, res) => {
  const users = await User.find().select("-password");

  res.json(users);
};

const getAllPharmacies = async (req, res) => {
  const pharmacies = await Pharmacy.find();

  res.json(pharmacies);
};

const getAllMedicines = async (req, res) => {
  const medicines = await Medicine.find()
    .populate("pharmacyId");

  res.json(medicines);
};

const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);

  res.json({
    message: "User deleted successfully"
  });
};

const dashboardStats = async (req, res) => {
  const users = await User.countDocuments();

  const pharmacies = await Pharmacy.countDocuments();

  const medicines = await Medicine.countDocuments();

  res.json({
    totalUsers: users,
    totalPharmacies: pharmacies,
    totalMedicines: medicines
  });
};

module.exports = {
  getAllUsers,
  getAllPharmacies,
  getAllMedicines,
  deleteUser,
  dashboardStats
};