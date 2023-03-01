import { Router } from "express";
import { sample_foods, sample_users } from "../data";
import jwt from "jsonwebtoken";
import { User, UserModel } from "../DB/userModel";
import asyncHandler from "express-async-handler";
import { FoodModel } from "../DB/foodModel";
import bcrypt from "bcryptjs";

const router = Router();

// seed the data from data.ts to db
router.get(
  "/seed",
  asyncHandler(async (req, res: any) => {
    // before seeding data into db, we will check if there is any data
    // present, if its there we wont seed.
    const usersCount = await UserModel.countDocuments();
    if (usersCount > 0) {
      res.send("seed is already done");
      return;
    }

    await UserModel.create(sample_users);
    res.send("seeding completed");
  })
);

// router.get("/", (req, res) => {
//   // res.send(sample_users);
// });

router.get("/", async (req, res) => {
  const users = await UserModel.find();
  res.send(users);
});

// // old method to fetch data from backend:

// router.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   const user = sample_users.find(
//     (user) => user.email === email && user.password === password
//   );

//   // if we found user send info
//   if (user) {
//     res.send(generateTokenResponse(user));
//   } else {
//     res.status(400).send("User Name or Password does not match");
//   }
// });

// login with data from mongo atlas:

router.post(
  "/login",
  asyncHandler(async (req: any, res: any) => {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });

    // if we found user send info
    console.log(
      "is user password same", user,
      user && (await bcrypt.compare(password, user.password))
    );
    if (user && (await bcrypt.compare(password, user.password))) {
      res.send(generateTokenResponse(user));
    } else {
      res.status(400).send("User Name or Password is Invalid !!");
    }
  })
);

// generate jwt
const generateTokenResponse = (user: any) => {
  const token = jwt.sign(
    {
      email: user.email,
      isAdmin: user.isAdmin,
    },
    "SomeRandomText",
    {
      expiresIn: "30d",
    }
  );

  user.token = token;
  return user;
};

// register user:
router.post(
  "/register",
  asyncHandler(async (req: any, res: any) => {
    const { name, email, password, address, isAdmin } = req.body;

    const user = await UserModel.findOne({ email, password });

    // if we found user tell him to login
    if (user) {
      res.status(400).send("User Already Exists, Please Login !!");
      return;
    }

    // first encrypt the password
    const encyptedPass = await bcrypt.hash(password, 9);

    const newUser = await UserModel.create({
      name,
      email: email.toLowerCase(),
      password: encyptedPass,
      address,
      isAdmin: false,
    });
    res.send(generateTokenResponse(newUser));
  })
);

export default router;
