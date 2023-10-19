import express from "express";
import asyncHandler from "express-async-handler";
import Clothes from "../models/clothesModel";
import Account from "../models/accountModel";

const router = express.Router();

// Create clothing
router.post(
    "/",
    asyncHandler(async (req, res) => {
        const { name, image, age, accountId } = req.body;

        const account = await Account.findById(accountId);
        if (!account) {
            return res.status(400).json({ message: "Invalid account ID" });
        }

        const newClothes = new Clothes({
            name,
            image,
            age,
        });

        newClothes.account = accountId;

        await newClothes.save();

        res.status(201).json({ message: "Clothes created successfully", clothes: newClothes });
    })
);

// Get all clothes from all accounts
router.get(
    "/",
    asyncHandler(async (req, res) => {
        const clothes = await Clothes.find({});

        res.json(clothes);
    })
);

// Get a specific clothes by ID
router.get(
    "/:id",
    asyncHandler(async (req, res) => {
        const clothes = await Clothes.findById(req.params.id);

        if (clothes) {
            res.json(clothes);
        } else {
            res.status(404).json({ message: "Clothes not found" });
        }
    })
);

// Get all clothes from a single account
router.get(
    "/account/:accountId",
    asyncHandler(async (req, res) => {
        const accountId = req.params.accountId;

        const account = await Account.findById(accountId);
        if (!account) {
            return res.status(404).json({ message: "Account not found" });
        }

        const clothes = await Clothes.find({ account: accountId });

        res.json(clothes);
    })
);

// Update clothes by ID
router.put(
    "/:id",
    asyncHandler(async (req, res) => {
        const { name, image, age } = req.body;

        const clothes = await Clothes.findById(req.params.id);

        if (clothes) {
            clothes.name = name || clothes.name;
            clothes.image = image || clothes.image;
            clothes.age = age || clothes.age;

            const updatedClothes = await clothes.save();
            res.json(updatedClothes);
        } else {
            res.status(404).json({ message: "Clothes not found" });
        }
    })
);

// Delete clothes by ID
router.delete(
    "/:id",
    asyncHandler(async (req, res) => {
        const clothes = await Clothes.findById(req.params.id);

        if (clothes) {
            await clothes.remove();
            res.json({ message: "Clothes removed" });
        } else {
            res.status(404).json({ message: "Clothes not found" });
        }
    })
);

export default router;
