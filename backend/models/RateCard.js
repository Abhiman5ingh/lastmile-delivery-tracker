const mongoose = require("mongoose");

const rateCardSchema = new mongoose.Schema(
  {
    orderType: {
      type: String,
      enum: ["B2B", "B2C"],
      required: true,
    },

    zoneType: {
      type: String,
      enum: ["Intra", "Inter"],
      required: true,
    },

    pricePerKg: {
      type: Number,
      required: true,
    },

    codCharge: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("RateCard", rateCardSchema);