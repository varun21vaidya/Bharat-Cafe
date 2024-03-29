"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taglist = exports.sample_users = exports.sample_foods = void 0;
exports.sample_foods = [
    {
        id: "1",
        name: "Pizza Pepperoni",
        cookTime: "10-20",
        price: 10,
        favorite: false,
        origins: ["italy"],
        stars: 4.5,
        imageUrl: "assets/food-1.jpg",
        tags: ["FastFood", "Pizza", "Lunch"],
    },
    {
        id: "2",
        name: "Gobi Manchurian",
        price: 20,
        cookTime: "20-30",
        favorite: true,
        origins: ["persia", "middle east", "china"],
        stars: 4.7,
        imageUrl: "assets/food-2.jpg",
        tags: ["SlowFood", "Lunch"],
    },
    {
        id: "3",
        name: "Burger",
        price: 5,
        cookTime: "10-15",
        favorite: false,
        origins: ["germany", "us"],
        stars: 3.5,
        imageUrl: "assets/food-3.jpg",
        tags: ["FastFood", "burger"],
    },
    {
        id: "4",
        name: "Fried Potatoes",
        price: 2,
        cookTime: "15-20",
        favorite: true,
        origins: ["belgium", "france"],
        stars: 3.3,
        imageUrl: "assets/food-4.jpg",
        tags: ["FastFood", "Fry"],
    },
    {
        id: "5",
        name: "Chicken Soup",
        price: 11,
        cookTime: "40-50",
        favorite: false,
        origins: ["india", "asia"],
        stars: 3.0,
        imageUrl: "assets/food-5.jpg",
        tags: ["SlowFood", "Soup"],
    },
    {
        id: "6",
        name: "Vegetables Pizza",
        price: 9,
        cookTime: "40-50",
        favorite: false,
        origins: ["italy"],
        stars: 4.0,
        imageUrl: "assets/food-6.jpg",
        tags: ["FastFood", "Pizza", "Lunch"],
    },
];
exports.sample_users = [
    {
        name: "Amit Jain",
        email: "amit@gmail.com",
        password: "Amit@123",
        address: "Bhopal",
        isAdmin: true,
    },
    {
        name: "John Smith",
        email: "John@gmail.com",
        password: "John@123",
        address: "New York",
        isAdmin: false,
    }
];
var output = Object.create(null);
var res = [];
res.push({ name: "All", count: exports.sample_foods.length });
// show all tags
exports.sample_foods.forEach(function (food) { var _a; return (_a = food["tags"]) === null || _a === void 0 ? void 0 : _a.forEach(function (tag) { return (output[tag] = (output[tag] || 0) + 1); }); });
// // return Tag object
Object.keys(output).forEach(function (tag) {
    res.push({ name: tag, count: output[tag] });
});
exports.taglist = res;
// export const taglist: any[] = [
//   { name: "All", count: 6 },
//   { name: "FastFood", count: 4 },
//   { name: "Pizza", count: 2 },
//   { name: "Lunch", count: 3 },
//   { name: "SlowFood", count: 2 },
//   { name: "burger", count: 1 },
//   { name: "Fry", count: 1 },
//   { name: "Soup", count: 1 },
// ];
