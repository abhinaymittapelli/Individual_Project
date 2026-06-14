const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema(
  {
    medicineName: String,

    brandName: String,

    genericName: String,

    category: String,

    quantity: Number,

    price: Number,

    expiryDate: Date,

    pharmacyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pharmacy"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Medicine", medicineSchema);