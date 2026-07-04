const express = require("express");

const router = express.Router();

const auth = require("../middlewares/authMiddleware");
const role = require("../middlewares/roleMiddleware");

const {
  createZone,
  getZones,
} = require("../controllers/zoneController");

router.post("/", auth, role("admin"), createZone);

router.get("/", auth, getZones);

module.exports = router;