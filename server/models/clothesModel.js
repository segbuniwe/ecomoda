import mongoose from "mongoose";

const clothesSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        age: {
            type: Number,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

//need to add passage auth handler/middleware

const Clothes = mongoose.model("Clothes", clothesSchema);

export default Clothes;
