const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors({
  origin: "*",
  credentials: true
}));
app.use(express.json());

app.use("/api/auth", authRoutes);

const zoneRoutes = require("./routes/zoneRoutes");

app.use("/api/zones", zoneRoutes);

const rateCardRoutes = require("./routes/rateCardRoutes");

app.use("/api/ratecards", rateCardRoutes);

const orderRoutes = require("./routes/orderRoutes");

app.use("/api/orders", orderRoutes);

const agentRoutes = require("./routes/agentRoutes");

app.use("/api/agent", agentRoutes);

const trackingRoutes = require("./routes/trackingRoutes");

app.use("/api/tracking", trackingRoutes);

const adminRoutes = require("./routes/adminRoutes");

app.use("/api/admin", adminRoutes);

app.get("/", (req, res) => {
  res.send("Last Mile Delivery Tracker API Running...");
});

module.exports = app;
