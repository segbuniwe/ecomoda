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
        // user: {
        //     type: mongoose.Schema.Types.ObjectId,
        //     ref: "User",
        //     required: true,
        // },
    },
    {
        collection: "clothes", // Specify the collection name
    }
);

//need to add passage auth handler/middleware

module.exports = mongoose.model("Clothes", clothesSchema);
