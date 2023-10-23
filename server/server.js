const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Passage = require("@passageidentity/passage-node");
const connectDB = require("./config/db");
const User = require("./models/userModel");
const clothesRouter = require("./routes/clothesRoute");
const userRouter = require("./routes/userRoute");

require("dotenv").config();

connectDB();

const app = express();
const allowedOrigins = [
  "http://localhost:3000",
  "https://main.d3u3eipz2iqdk9.amplifyapp.com",
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: "GET,PUT,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

app.use(express.json());

app.use("/api/users", userRouter);

app.use("/api/clothes", clothesRouter);

const passage = new Passage({
  appID: process.env.PASSAGE_APP_ID,
  apiKey: process.env.PASSAGE_API_KEY,
  authStrategy: "HEADER",
});

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/auth", async (req, res) => {
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

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
