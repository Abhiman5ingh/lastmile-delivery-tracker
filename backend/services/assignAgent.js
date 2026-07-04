const User = require("../models/User");

const assignAgent = async () => {

    const agent = await User.findOne({
        role: "agent",
        isAvailable: true
    });

    if (!agent)
        throw new Error("No Agent Available");

    agent.isAvailable = false;

    await agent.save();

    return agent;
}

module.exports = assignAgent;