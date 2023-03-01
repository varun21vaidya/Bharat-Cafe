import express from "express";
import cors from "cors";
import foodRouter from "./router/food.router";
import userRouter from "./router/user.router";
import dotenv from "dotenv";

// connect to db
import {connectDB} from "./DB/config";
connectDB();

const app = express();

// to be able to send json responses
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

// we have shifted all food related api to food.router.ts so use that
app.use("/api/foods", foodRouter);

// we have shifted all user related api to user.router.ts so use that
app.use("/api/users", userRouter);

const port = 5000;
app.listen(port, () => {
  console.log("website serving on http://localhost:" + port);
});
