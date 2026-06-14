const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  getAllPharmacies,
  getAllMedicines,
  deleteUser,
  dashboardStats
} = require("../controllers/adminController");

const protect = require("../middleware/authMiddleware");

const {
  adminOnly
} = require("../middleware/roleMiddleware");

router.get(
  "/users",
  protect,
  adminOnly,
  getAllUsers
);

router.get(
  "/pharmacies",
  protect,
  adminOnly,
  getAllPharmacies
);

router.get(
  "/medicines",
  protect,
  adminOnly,
  getAllMedicines
);

router.get(
  "/stats",
  protect,
  adminOnly,
  dashboardStats
);

router.delete(
  "/user/:id",
  protect,
  adminOnly,
  deleteUser
);

module.exports = router;