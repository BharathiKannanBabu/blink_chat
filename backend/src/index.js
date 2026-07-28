import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./lib/db.js";
import { clerkMiddleware } from "@clerk/express";

dotenv.config();

const app = express();

const PORT = process.env.PORT;
const FRONTEND_URL = process.env.FRONTEND_URL;

app.use(clerkMiddleware());
app.use(express.json());
app.use(cors({ origin: FRONTEND_URL, Credentials: true }));

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running : ${PORT}`);
});
