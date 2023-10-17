import express from "express";
import asyncHandler from "express-async-handler";
const router = express.Router();
import Account from "../models/accountModel";

router.get(
  "/",
  asyncHandler(async (req, res) => {
    const account = await Account.find({});

    res.json(account);
  })
);

router.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const account = await Account.findById(req.params.id);
    if (account) {
      res.json(account);
    } else {
      res.status(404).json({ message: "Account not found" });
    }
  })
);

export default router;
