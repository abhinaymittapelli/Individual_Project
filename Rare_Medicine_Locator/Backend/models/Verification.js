const mongoose = require("mongoose");

const verificationSchema = new mongoose.Schema(
  {
    medicineId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Medicine"
    },

    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    status: {
      type: String,
      enum: ["available", "not_available"]
    },

    comment: String
  },
  { timestamps: true }
);

module.exports = mongoose.model("Verification", verificationSchema);