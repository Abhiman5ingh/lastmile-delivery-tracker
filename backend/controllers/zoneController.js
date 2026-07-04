const Zone = require("../models/Zone.js");

// Create Zone
exports.createZone = async (req, res) => {
  try {
    const zone = await Zone.create(req.body);

    res.status(201).json({
      success: true,
      zone,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

// Get All Zones
exports.getZones = async (req, res) => {
  try {
    const zones = await Zone.find();

    res.json({
      success: true,
      zones,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};