import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 8000;
const database = process.env.MONGO_URL;
const corsOption = {
  origin: true,
};

app.get("/", (req, res) => {
  res.send("Api is running");
});

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(database);
    console.log(`connection successfull`);
  } catch (e) {
    console.log(`Error while connecting => ${e}`);
  }
};

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOption));
app.use("/api/v1/auth", authRouter);

app.listen(port, () => {
  connectDB();
  console.log(`server is running at ${port}`);
});
