require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { rateLimit } = require("express-rate-limit");

const router = express.Router();

const authRoutes = require("./routes/auth-routes");

const handleErrors = require("./middleware/errors-middleware");

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  limit: 50,
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: { error: "Too many requests. Please try again after 15 minutes." },
});

// middleware
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);
app.use(limiter);
app.use(express.json());

async function main() {
  const dbURI = process.env.DB_URI;

  if(!dbURI) {
    console.error(
      "Database URI is missing. Please set DB_URI in your .env file."
    );
    process.exit(1);
  }

  await mongoose.connect(dbURI);
  app.listen(8080);
}

try {
  main();
} catch (error) {
  console.error(error);
}

router.use("/auth", authRoutes);

app.use("/api", router);
app.use(handleErrors);