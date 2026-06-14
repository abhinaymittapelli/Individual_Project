const express = require("express");
const router = express.Router();

const {
  addVerification,
  getVerificationByMedicine,
  getAllVerifications
} = require("../controllers/verificationController");

router.post("/", addVerification);

router.get("/", getAllVerifications);

router.get("/:medicineId", getVerificationByMedicine);

module.exports = router;