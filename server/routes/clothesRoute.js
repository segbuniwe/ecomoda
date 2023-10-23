const express = require("express");
const router = express.Router();
const Clothes = require("../models/clothesModel");

router.post(
    "/", (async (req, res) => {
        const {
            name,
            image,
            description,
            size,
            contact,
            location
        } = req.body;

        const newClothes = new Clothes({
            name,
            image,
            description,
            size,
            contact,
            location,
        });

        await newClothes.save();

        res.status(201).json({ message: "Clothes created successfully", clothes: newClothes });
    })
);

router.get(
    "/list", (async (req, res) => {
        const clothes = await Clothes.find();

        res.json(clothes);
    })
);

router.get(
    "/:id", (async (req, res) => {
        const clothes = await Clothes.findById(req.params.id);

        if (clothes) {
            res.json(clothes);
        } else {
            res.status(404).json({ message: "Clothes not found" });
        }
    })
);

router.get(
    "/user/:userId", (async (req, res) => {
        const userId = req.params.userId;

        const clothes = await Clothes.find({ user: userId }).populate('user');

        res.json(clothes);
    })
);

router.put(
    "/:id", (async (req, res) => {
        const { name, image, description, size } = req.body;

        const clothes = await Clothes.findById(req.params.id);

        if (clothes) {
            clothes.name = name || clothes.name;
            clothes.image = image || clothes.image;
            clothes.description = description || clothes.description;
            clothes.size = size || clothes.size;

            const updatedClothes = await clothes.save();
            res.json(updatedClothes);
        } else {
            res.status(404).json({ message: "Clothes not found" });
        }
    })
);

router.delete(
    "/:id", (async (req, res) => {
        const clothes = await Clothes.findById(req.params.id);

        if (clothes) {
            await clothes.remove();
            res.json({ message: "Clothes removed" });
        } else {
            res.status(404).json({ message: "Clothes not found" });
        }
    })
);


module.exports = router;
