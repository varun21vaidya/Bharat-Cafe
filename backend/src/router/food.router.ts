import { Router } from "express";
import { sample_foods, taglist } from "../data";
import { FoodModel } from "../DB/foodModel";
import asyncHandler from "express-async-handler";

const router = Router();

// seed the data from data.ts to db
router.get(
  "/seed",
  asyncHandler(async (req, res: any) => {
    // before seeding data into db, we will check if there is any data
    // present, if its there we wont seed.
    const foodsCount = await FoodModel.countDocuments();
    if (foodsCount > 0) {
      res.send("seed is already done");
      return;
    }

    await FoodModel.create(sample_foods);
    res.send("seeding completed");
  })
);

// router.get("/tags", (req, res) => {
//   res.send(taglist);
// });

router.get(
  "/tags",
  asyncHandler(async (req, res: any) => {
    const tags = await FoodModel.aggregate([
      {
        $unwind: "$tags",
      },
      {
        $group: {
          _id: "$tags",
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          name: "$_id",
          count: "$count",
        },
      },
    ]).sort({ count: -1 });

    const all = {
      name: "All",
      count: await FoodModel.countDocuments(),
    };
    tags.unshift(all);
    res.send(tags);
  })
);

// router.get("/", (req, res) => {
//   res.send(sample_foods);
// });

router.get(
  "/",
  asyncHandler(async (req, res: any) => {
    const foods = await FoodModel.find();
    res.send(foods);
  })
);

// router.get("/search/:searchTerm", (req, res) => {
//   const searchTerm = req.params.searchTerm;
//   const foods = sample_foods.filter((food) =>
//     food.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   res.send(foods);
// });

router.get(
  "/search/:searchTerm",
  asyncHandler(async (req: any, res: any) => {
    // make case insensitive
    const searchRegex = new RegExp(req.params.searchTerm, "i");
    const foods = await FoodModel.find({
      name: { $regex: searchRegex },
    });
    res.send(foods);
  })
);

// router.get("/:id", (req, res) => {
//   const foodId = req.params.id;
//   const foods = sample_foods.filter((food) => food.id == foodId);
//   res.send(foods);
// });

router.get(
  "/:id",
  asyncHandler(async (req: any, res: any) => {
    const foodId = req.params.id;
    const foods = await FoodModel.findById(foodId);
    // console.log(`this is food of ${foodId}`,foods);
    res.send(foods);
  })
);

// router.get("/tag/:tagName", asyncHandler(async(req:any, res:any) => {
//   const tagName = req.params.tagName;
//   if (tagName == "All") {
//     res.send(sample_foods);
//   }
//   const foods = sample_foods.filter((food) => food.tags?.includes(tagName));
//   res.send(foods);
// })
// );

router.get(
  "/tag/:tagName",
  asyncHandler(async (req: any, res: any) => {
    const searchRegex = new RegExp(req.params.tagName, "i");
    const foods = await FoodModel.find({
      tags: { $regex: searchRegex },
    });
    res.send(foods);
  })
);

export default router;
