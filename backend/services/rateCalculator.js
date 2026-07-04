const Zone = require("../models/Zone.js");
const RateCard = require("../models/RateCard.js");

const calculateRate = async (
    pickupAddress,
    dropAddress,
    length,
    breadth,
    height,
    actualWeight,
    orderType,
    paymentType
) => {

    // Detect Pickup Zone
    const pickupZone = await Zone.findOne({
        areas: { $in: [pickupAddress] }
    });

    // Detect Drop Zone
    const dropZone = await Zone.findOne({
        areas: { $in: [dropAddress] }
    });

    if (!pickupZone || !dropZone) {
        throw new Error("Zone not found");
    }

    const volumetricWeight =
        (length * breadth * height) / 5000;

    const chargeableWeight =
        Math.max(actualWeight, volumetricWeight);

    const zoneType =
        pickupZone._id.equals(dropZone._id)
            ? "Intra"
            : "Inter";

    const rate = await RateCard.findOne({
        orderType,
        zoneType,
    });

    if (!rate) {
        throw new Error("Rate Card Missing");
    }

    let total =
        chargeableWeight * rate.pricePerKg;

    if (paymentType === "COD") {
        total += rate.codCharge;
    }

    return {
        pickupZone,
        dropZone,
        volumetricWeight,
        chargeableWeight,
        totalCharge: total,
    };
};

module.exports = calculateRate;