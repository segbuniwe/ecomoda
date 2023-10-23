import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import Passage from "@passageidentity/passage-node";
import connectDB from "./config/db.js";
import userSchema from "./models/userModel.js";
import clothesRouter from "./routes/clothesRoute.js";
import bodyParser from "body-parser";
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { check, validationResult } from "express-validator"
import rateLimit from "express-rate-limit";
import morgan from "morgan";
import fs from "fs";
import path from "path";
import ejs from "ejs";
import methods from "./methods.js";
import dotenv from "dotenv";
import userRouter from "./routes/userRoute.js";

dotenv.config();

connectDB();

const app = express();

const allowedOrigins = [
  "http://localhost:3000",
  "https://main.d3u3eipz2iqdk9.amplifyapp.com",
];

app.use(bodyParser.json())

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

      const user = await userSchema.findOneAndUpdate(
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

const logsDir = path.join(process.cwd(), "logs")
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir)
}

const logStream = fs.createWriteStream(path.join(logsDir, "access.log"), {
  flags: "a",
})

app.use(morgan("combined", { stream: logStream }))
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
})

app.use(limiter)

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: "Internal server error" })
})

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "LangChain Express API",
      version: "1.0.0",
      description: "A simple API to interact with LangChain prompts",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./app.js"],
}


methods.forEach((method) => {
  const {
    id,
    route,
    method: httpMethod,
    description,
    inputVariables,
    execute,
  } = method


  app[httpMethod](
    route,
    inputVariables.map((variable) =>
      check(variable).notEmpty().trim().escape()
    ),
    async (req, res) => {

      const errors = validationResult(req)
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
      }
      const input = inputVariables.reduce((acc, variable) => {
        acc[variable] = req.body[variable]
        return acc
      }, {})

      try {
        const result = await execute(input)

        if (result.stream) {
          res.setHeader("Content-Type", "application/ndjson")
          res.setHeader("Cache-Control", "no-cache")
          res.setHeader("Connection", "keep-alive")
          res.flushHeaders()
          result.stream.on("data", (chunk) => {
            res.write(JSON.stringify({ text: chunk.toString() }) + "\n")
          })
          result.stream.on("end", () => {
            res.end()
          })

          req.on("close", () => {
            result.stream.destroy()
          })
        } else {
          res.json({ text: result.text })
        }
      } catch (error) {
        console.log(error)
        res.status(500).json({ error: error.message })
      }
    }
  )


  options.definition.paths = options.definition.paths || {}
  options.definition.paths[route] = {
    [httpMethod]: {
      summary: description,
      requestBody: {
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: inputVariables.reduce((acc, variable) => {
                acc[variable] = { type: "string" }
                return acc
              }, {}),
              required: inputVariables,
            },
          },
        },
      },
      responses: {
        200: {
          description: "Successful operation",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  text: {
                    type: "string",
                  },
                },
              },
            },
          },
        },
        500: {
          description: "Internal server error",
        },
      },
    },
  }
})

const specs = swaggerJsdoc(options)

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/chat", (req, res) => {
  fs.readFile("./views/index.ejs", "utf8", (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).send("Error")
    }
    const html = ejs.render(data, { methods })
    res.send(html)
  })
})

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs))

const PORT = process.env.PORT || 7000;

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
  console.log(`LangChain Express app listening at http://localhost:${PORT}`);
});
