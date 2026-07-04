const Tracking = require("../models/Tracking.js");

exports.getTracking = async (req, res) => {
    try {
        const tracking = await Tracking.find({
            order: req.params.orderId
        }).sort({ createdAt: 1 });

        res.json(tracking);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};