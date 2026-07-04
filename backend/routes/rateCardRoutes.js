const express = require("express");

const router = express.Router();

const auth = require("../middlewares/authMiddleware");
const role = require("../middlewares/roleMiddleware");

const {
  createRateCard,
  getRateCards,
} = require("../controllers/rateCardController");

router.post("/", auth, role("admin"), createRateCard);

router.get("/", auth, getRateCards);

module.exports = router;