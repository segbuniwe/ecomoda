import express from "express";
const userRouter = express.Router();
import Passage from "@passageidentity/passage-node";
import userSchema from "../models/userModel.js";

const passage = new Passage({
  appID: process.env.PASSAGE_APP_ID,
  apiKey: process.env.PASSAGE_API_KEY,
  authStrategy: "HEADER",
});


userRouter.get("/", async (req, res) => {
  try {
    const user = await userSchema.find();
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

userRouter.post("/auth", async (req, res) => {
  try {
    const userID = await passage.authenticateRequest(req);
    if (userID) {
      const { email, phone } = await passage.user.get(userID);
      const identifier = email ? email : phone;

      const user = await userSchema.findOneAndUpdate(
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

export default userRouter;
