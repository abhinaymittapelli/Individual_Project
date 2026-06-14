const mongoose = require("mongoose");

const pharmacySchema = new mongoose.Schema(
  {
    pharmacyName: String,

    ownerName: String,

    phone: String,

    address: String,

    city: String,

    state: String,

    latitude: Number,

    longitude: Number,

    isVerified: {
      type: Boolean,
      default: false
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pharmacy", pharmacySchema);