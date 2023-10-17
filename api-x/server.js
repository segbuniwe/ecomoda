const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Passage = require("@passageidentity/passage-node");
const clothesRoute = require("./routes/clothesRoute"); // Import the clothes route
const Account = require("./models/accountModel"); // Import the account model

require("dotenv").config();

const app = express();
const CLIENT_URL = "http://localhost:3000";

app.use(express.json());
app.use(cors({ origin: CLIENT_URL }));

const passage = new Passage({
  appID: process.env.PASSAGE_APP_ID,
  apiKey: process.env.PASSAGE_API_KEY,
  authStrategy: "HEADER",
});

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/auth", async (req, res) => {
  try {
    const userID = await passage.authenticateRequest(req);
    if (userID) {
      // user is authenticated
      const { email, phone } = await passage.user.get(userID);
      const identifier = email ? email : phone;

      // Store user information in the account model
      await Account.findOneAndUpdate(
        { identifier },
        { identifier, authenticated: true },
        { upsert: true, new: true }
      );

      res.json({
        authStatus: "success",
        identifier,
      });
    }
  } catch (e) {
    // authentication failed
    console.log(e);
    res.json({
      authStatus: "failure",
    });
  }
});

// Use the clothes route
app.use("/api/clothes", clothesRoute);

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
