const express = require("express");

const router = express.Router();

const auth = require("../middlewares/authMiddleware");
const role = require("../middlewares/roleMiddleware");

const {
  getAllOrders,
  overrideStatus,
} = require("../controllers/adminController");

router.get(
  "/orders",
  auth,
  role("admin"),
  getAllOrders
);

router.put(
  "/orders/:id",
  auth,
  role("admin"),
  overrideStatus
);

module.exports = router;