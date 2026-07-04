const Order = require("../models/Order");

exports.getAllOrders = async (req, res) => {
  try {

    const orders = await Order.find()
      .populate("customer", "name")
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

exports.overrideStatus = async (req, res) => {

  try {

    const order = await Order.findById(req.params.id);

    if (!order) {

      return res.status(404).json({

        success: false,

        message: "Order Not Found"

      });

    }

    order.status = req.body.status;

    await order.save();

    res.json({

      success: true,

      order

    });

  } catch (err) {

    res.status(500).json({

      success: false,

      message: err.message

    });

  }

};