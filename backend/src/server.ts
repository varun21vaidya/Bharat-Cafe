import express from "express";
import cors from "cors";
import { sample_foods, taglist } from "./data";

const app = express();

app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:4200"],
  })
);

app.get("/api/foods/tags", (req, res) => {
  res.send(taglist);
});

app.get("/api/foods", (req, res) => {
  res.send(sample_foods);
});

app.get("/api/foods/search/:searchTerm", (req, res) => {
  const searchTerm = req.params.searchTerm;
  const foods = sample_foods.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  res.send(foods);
});

app.get("/api/foods/:id", (req, res) => {
  const foodId = req.params.id;
  const foods = sample_foods.filter((food) => food.id == foodId);
  res.send(foods);
});

app.get("/api/foods/tag/:tagName", (req, res) => {
  const tagName = req.params.tagName;
  if (tagName == "All") {
    res.send(sample_foods);
  }
  const foods = sample_foods.filter((food) => food.tags?.includes(tagName));
  res.send(foods);
});

const port = 5000;
app.listen(port, () => {
  console.log("website serving on http://localhost:" + port);
});
