const RateCard = require("../models/RateCard.js");

// Create Rate Card
exports.createRateCard = async (req, res) => {
  try {
    const rate = await RateCard.create(req.body);

    res.status(201).json({
      success: true,
      rate,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Get All Rate Cards
exports.getRateCards = async (req, res) => {
  try {
    const rates = await RateCard.find();

    res.json({
      success: true,
      rates,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};