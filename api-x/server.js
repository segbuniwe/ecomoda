const express = require("express");
const cors = require("cors");
const Passage = require("@passageidentity/passage-node");

require("dotenv").config();

const app = express();
const CLIENT_URL = "http://localhost:3000";

app.use(express.json());
app.use(
  cors({
    origin: CLIENT_URL,
  })
);

const passage = new Passage({
  appID: process.env.PASSAGE_APP_ID,
  apiKey: process.env.PASSAGE_API_KEY,
  authStrategy: "HEADER",
});

app.post("/auth", async (req, res) => {
  try {
    const userID = await passage.authenticateRequest(req);
    if (userID) {
      // user is authenticated
      const { email, phone } = await passage.user.get(userID);
      const identifier = email ? email : phone;

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

app.get("/", (req, res) => {
  res.send("API is running...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
