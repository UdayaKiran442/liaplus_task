import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";

import db from "./repository/db";

import userRouter from "./routes/user.routes";
import blogRouter from "./routes/blog.routes";

dotenv.config();

db.on("error", console.error.bind(console, "Error in connecting database"));
db.once("open", () => console.log("Connected to database"));

const app = express();

app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/blogs", blogRouter);

app.get("/health-check", (req: Request, res: Response) => {
  res.send(`Server is running on port ${process.env.PORT || 5000}`);
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is running on port ${process.env.PORT || 5000}`);
});
