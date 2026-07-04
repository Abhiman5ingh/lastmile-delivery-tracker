const express = require("express");

const router = express.Router();

const auth = require("../middlewares/authMiddleware");

const {
  createOrder,
  getMyOrders,
  getOrder,
} = require("../controllers/orderController");

router.post("/", auth, createOrder);

router.get("/", auth, getMyOrders);

router.get("/:id", auth, getOrder);

module.exports = router;