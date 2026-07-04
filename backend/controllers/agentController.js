const Order = require("../models/Order.js");
const Tracking = require("../models/Tracking.js");
const sendEmail = require("../services/emailService.js");
const User = require("../models/User.js");

/**
 * GET: Assigned Orders for logged-in agent
 */
exports.getAssignedOrders = async (req, res) => {
  try {
    const orders = await Order.find({
      agent: req.user.id,
    })
      .populate("customer", "name email phone")
      .populate("pickupZone", "zoneName")
      .populate("dropZone", "zoneName");

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

/**
 * UPDATE: Order Status
 */
exports.updateStatus = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;

    const allowedStatus = [
      "Picked Up",
      "In Transit",
      "Out For Delivery",
      "Delivered",
      "Failed",
    ];

    if (!allowedStatus.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Status",
      });
    }

    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    // Ensure agent is assigned to this order
    if (order.agent.toString() !== req.user.id) {
      return res.status(403).json({
        success: false,
        message: "You are not assigned to this order",
      });
    }

    // Update status
    order.status = status;
    await order.save();

    // Track status change
    await Tracking.create({
      order: order._id,
      status,
      actor: req.user.id,
      remarks: status,
    });

    // Fetch customer and send email notification
    const customer = await User.findById(order.customer);

    if (customer && customer.email) {
      try {
        await sendEmail(
          customer.email,
          "Order Status Updated",
          `Your order status is now: ${status}`
        );
      } catch (emailErr) {
        console.error("Email failed:", emailErr.message);
        // Do NOT crash API if email fails
      }
    }

    // Free agent after completion
    if (status === "Delivered" || status === "Failed") {
      await User.findByIdAndUpdate(req.user.id, {
        isAvailable: true,
      });
    }

    res.json({
      success: true,
      message: "Status Updated Successfully",
      order,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

/**
 * RESCHEDULE: Order
 */
exports.rescheduleOrder = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { rescheduleDate } = req.body;

    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    // Update order
    order.status = "Assigned";
    order.rescheduleDate = rescheduleDate;
    await order.save();

    // Track reschedule
    await Tracking.create({
      order: order._id,
      status: "Rescheduled",
      actor: req.user.id,
      remarks: `Rescheduled to ${rescheduleDate}`,
    });

    res.json({
      success: true,
      message: "Order Rescheduled",
      order,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};