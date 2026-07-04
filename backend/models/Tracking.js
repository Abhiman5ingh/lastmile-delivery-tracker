const mongoose = require("mongoose");

const trackingSchema = new mongoose.Schema({
  order: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order",
  },

  status: {
    type: String,
  },

  actor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },

  remarks: {
    type: String,
  },

  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Tracking", trackingSchema);