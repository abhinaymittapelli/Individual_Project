const Medicine = require("../models/Medicine");

// Add Medicine
const addMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.create(req.body);

    res.status(201).json(medicine);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Get All Medicines
const getAllMedicines = async (req, res) => {
  try {
    const medicines = await Medicine.find().populate("pharmacyId");

    res.json(medicines);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Get Medicine By ID
const getMedicineById = async (req, res) => {
  try {
    const medicine = await Medicine.findById(req.params.id)
      .populate("pharmacyId");

    if (!medicine) {
      return res.status(404).json({
        message: "Medicine not found"
      });
    }

    res.json(medicine);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Search Medicine
const searchMedicine = async (req, res) => {
  try {
    const { name } = req.query;

    const medicines = await Medicine.find({
      medicineName: {
        $regex: name,
        $options: "i"
      }
    }).populate("pharmacyId");

    res.json(medicines);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Update Medicine
const updateMedicine = async (req, res) => {
  try {
    const medicine = await Medicine.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json(medicine);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// Delete Medicine
const deleteMedicine = async (req, res) => {
  try {
    await Medicine.findByIdAndDelete(req.params.id);

    res.json({
      message: "Medicine deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

const searchByCategory = async (req, res) => {

  try {

    const { category } = req.query;

    const medicines = await Medicine.find({
      category
    }).populate("pharmacyId");

    res.json(medicines);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }
};
 
// Rare Medicine Locator
const locateMedicine = async (req, res) => {
  try {
    const { name } = req.query;

    const medicines = await Medicine.find({
      $or: [
        {
          medicineName: {
            $regex: name,
            $options: "i"
          }
        },
        {
          brandName: {
            $regex: name,
            $options: "i"
          }
        },
        {
          genericName: {
            $regex: name,
            $options: "i"
          }
        }
      ]
    }).populate("pharmacyId");

    const result = medicines.map((medicine) => ({
  medicineName: medicine.medicineName,
  brandName: medicine.brandName,
  genericName: medicine.genericName,
  quantity: medicine.quantity,

  pharmacy: medicine.pharmacyId?.pharmacyName,

  city: medicine.pharmacyId?.city,

  address: medicine.pharmacyId?.address,

  phone: medicine.pharmacyId?.phone,

  latitude: medicine.pharmacyId?.latitude,

  longitude: medicine.pharmacyId?.longitude
}));
    res.json(result);

  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  addMedicine,
  getAllMedicines,
  getMedicineById,
  searchMedicine,
  updateMedicine,
  deleteMedicine,
  locateMedicine,
  searchByCategory
};