const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    pickupAddress: String,
    dropAddress: String,

    pickupZone: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Zone",
    },

    dropZone: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Zone",
    },

    length: Number,
    breadth: Number,
    height: Number,

    actualWeight: Number,
    volumetricWeight: Number,
    chargeableWeight: Number,

    orderType: {
      type: String,
      enum: ["B2B", "B2C"],
    },

    paymentType: {
      type: String,
      enum: ["Prepaid", "COD"],
    },

    deliveryCharge: Number,

    agent: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    status: {
      type: String,
      enum: [
        "Created",
        "Assigned",
        "Picked Up",
        "In Transit",
        "Out For Delivery",
        "Delivered",
        "Failed",
      ],
      default: "Created",
    },

    scheduledDate: Date,

    rescheduleDate: {
    type: Date,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);