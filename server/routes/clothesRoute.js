import express from "express";
const clothesRouter = express.Router();
import clothesSchema from "../models/clothesModel.js";

clothesRouter.post(
    "/", (async (req, res) => {
        const {
            name,
            image,
            description,
            size,
            contact,
            location
        } = req.body;

        const newClothes = new clothesSchema({
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


clothesRouter.get(
    "/list", (async (req, res) => {
        const clothes = await clothesSchema.find();

        res.json(clothes);
    })
);


clothesRouter.get(
    "/:id", (async (req, res) => {
        const clothes = await clothesSchema.findById(req.params.id);

        if (clothes) {
            res.json(clothes);
        } else {
            res.status(404).json({ message: "Clothes not found" });
        }
    })
);


clothesRouter.get(
    "/user/:userId", (async (req, res) => {
        const userId = req.params.userId;

        const clothes = await clothesSchema.find({ user: userId }).populate('user');

        res.json(clothes);
    })
);


clothesRouter.put(
    "/:id", (async (req, res) => {
        const { name, image, description, size } = req.body;

        const clothes = await clothesSchema.findById(req.params.id);

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


clothesRouter.delete(
    "/:id", (async (req, res) => {
        const clothes = await clothesSchema.findById(req.params.id);

        if (clothes) {
            await clothes.remove();
            res.json({ message: "Clothes removed" });
        } else {
            res.status(404).json({ message: "Clothes not found" });
        }
    })
);

export default clothesRouter;
