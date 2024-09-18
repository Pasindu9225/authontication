import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./db/connectDB.js";

import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("Hello World! login");
});

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("Listening on port:", PORT);
});
