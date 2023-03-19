import express from "express";
import cors from "cors";
import foodRouter from "./router/food.router";
import userRouter from "./router/user.router";
import orderRouter from "./router/order.router";
import dotenv from "dotenv";
dotenv.config();
// connect to db
import { connectDB } from "./DB/config";
connectDB();

const app = express();

// to be able to send json responses
app.use(express.json());

app.use(
  cors({
    credentials: true,
    origin: [
      "http://localhost:4200",
      "https://bharat-cafe.vercel.app",
      "https://bharat-cafe-varun21vaidya.vercel.app",
      "https://bharat-cafe-git-master-varun21vaidya.vercel.app",
    ],
  })
);

// we have shifted all food related api to food.router.ts so use that
app.use("/api/foods", foodRouter);

// we have shifted all user related api to user.router.ts so use that
app.use("/api/users", userRouter);

app.use("/api/orders", orderRouter);

const port = 5000;
app.listen(port, () => {
  console.log("website serving on http://localhost:" + port);
});
