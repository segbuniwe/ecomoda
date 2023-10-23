const express = require("express");
const router = express.Router();
const Passage = require("@passageidentity/passage-node");
const User = require("../models/userModel");

const passage = new Passage({
  appID: process.env.PASSAGE_APP_ID,
  apiKey: process.env.PASSAGE_API_KEY,
  authStrategy: "HEADER",
});

router.get("/", async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/auth", async (req, res) => {
  try {
    const userID = await passage.authenticateRequest(req);
    if (userID) {
      const { email, phone } = await passage.user.get(userID);
      const identifier = email ? email : phone;

      const user = await User.findOneAndUpdate(
        { email: identifier },
        { passageIdentityUserId: userID },
        { new: true, upsert: true }
      );

      res.json({
        authStatus: "success",
        identifier,
        passageIdentityUserId: user.passageIdentityUserId,
      });
    }
  } catch (e) {
    console.log(e);
    res.json({
      authStatus: "failure",
    });
  }
});

module.exports = router;
