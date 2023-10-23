const mongoose = require("mongoose");

const clothesSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
        size: {
            type: String,
            required: true,
        },
        contact: {
            type: String || Number,
            required: true,
        },
        location: {
            type: String,
            required: true,
        }
    },
    {
        collection: "clothes",
    }
);


module.exports = mongoose.model("Clothes", clothesSchema);
