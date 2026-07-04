const express = require("express");
const router = express.Router();

const auth = require("../middlewares/authMiddleware");
const role = require("../middlewares/roleMiddleware");

const {
  getAssignedOrders,
  updateStatus,
  rescheduleOrder,
} = require("../controllers/agentController");

router.get(
  "/orders",
  auth,
  role("agent"),
  getAssignedOrders
);

router.put(
  "/orders/:orderId/status",
  auth,
  role("agent"),
  updateStatus
);

// Reschedule failed delivery
router.put(
  "/orders/:orderId/reschedule",
  auth,
  role("agent"),
  rescheduleOrder
);

module.exports = router;