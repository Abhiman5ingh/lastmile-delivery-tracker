const Order = require("../models/Order.js");
const Tracking = require("../models/Tracking.js");
const User = require("../models/User.js");

const calculateRate = require("../services/rateCalculator.js");
const assignAgent = require("../services/assignAgent.js");
const sendEmail = require("../services/emailService.js");

exports.createOrder = async (req, res) => {
  try {
    const {
      pickupAddress,
      dropAddress,
      length,
      breadth,
      height,
      actualWeight,
      orderType,
      paymentType,
    } = req.body;

    const rate = await calculateRate(
      pickupAddress,
      dropAddress,
      length,
      breadth,
      height,
      actualWeight,
      orderType,
      paymentType
    );

    // Assign available agent
    const agent = await assignAgent();

    // Create order
    const order = await Order.create({
      customer: req.user.id,

      pickupAddress,
      dropAddress,

      pickupZone: rate.pickupZone._id,
      dropZone: rate.dropZone._id,

      length,
      breadth,
      height,

      actualWeight,
      volumetricWeight: rate.volumetricWeight,
      chargeableWeight: rate.chargeableWeight,

      orderType,
      paymentType,

      deliveryCharge: rate.totalCharge,

      agent: agent._id,
      status: "Assigned",
    });

    // Tracking - Order Created
    await Tracking.create({
      order: order._id,
      status: "Created",
      actor: req.user.id,
      remarks: "Order Created",
    });

    // Tracking - Agent Assigned
    await Tracking.create({
      order: order._id,
      status: "Assigned",
      actor: agent._id,
      remarks: "Agent Assigned",
    });

    // Fetch customer
    const customer = await User.findById(req.user.id);

    // Send confirmation email
    await sendEmail(
      customer.email,
      "Order Created",
      `Your order has been created successfully.

Order ID: ${order._id}

Delivery Charge: ₹${rate.totalCharge}

Current Status: Assigned`
    );

    res.status(201).json({
      success: true,
      order,
      deliveryCharge: rate.totalCharge,
    });

  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getMyOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      customer: req.user.id,
    })
      .populate("agent", "name")
      .populate("pickupZone", "zoneName")
      .populate("dropZone", "zoneName")
      .sort({ createdAt: -1 });

    res.json({
      success: true,
      orders,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getOrder = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate("customer", "name email")
      .populate("agent", "name")
      .populate("pickupZone", "zoneName")
      .populate("dropZone", "zoneName");

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order Not Found",
      });
    }

    res.json({
      success: true,
      order,
    });

  } catch (err) {

    res.status(500).json({
      success: false,
      message: err.message,
    });

  }
};