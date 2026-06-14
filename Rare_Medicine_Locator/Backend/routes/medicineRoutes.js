const express = require("express");
const router = express.Router();

const {
  addMedicine,
  getAllMedicines,
  getMedicineById,
  searchMedicine,
  updateMedicine,
  deleteMedicine,
  locateMedicine,
  searchByCategory
} = require("../controllers/medicineController");

router.post("/", addMedicine);

router.get("/", getAllMedicines);

router.get("/search", searchMedicine);

router.get("/locator", locateMedicine);

router.get("/category",searchByCategory);

router.get("/:id", getMedicineById);

router.put("/:id", updateMedicine);

router.delete("/:id", deleteMedicine);

module.exports = router;