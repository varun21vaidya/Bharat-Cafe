"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var data_1 = require("../data");
var foodModel_1 = require("../DB/foodModel");
var express_async_handler_1 = __importDefault(require("express-async-handler"));
var router = (0, express_1.Router)();
// seed the data from data.ts to db
router.get("/seed", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var foodsCount;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, foodModel_1.FoodModel.countDocuments()];
            case 1:
                foodsCount = _a.sent();
                if (foodsCount > 0) {
                    res.send("seed is already done");
                    return [2 /*return*/];
                }
                return [4 /*yield*/, foodModel_1.FoodModel.create(data_1.sample_foods)];
            case 2:
                _a.sent();
                res.send("seeding completed");
                return [2 /*return*/];
        }
    });
}); }));
// router.get("/tags", (req, res) => {
//   res.send(taglist);
// });
router.get("/tags", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var tags, all;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, foodModel_1.FoodModel.aggregate([
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
                ]).sort({ count: -1 })];
            case 1:
                tags = _b.sent();
                _a = {
                    name: "All"
                };
                return [4 /*yield*/, foodModel_1.FoodModel.countDocuments()];
            case 2:
                all = (_a.count = _b.sent(),
                    _a);
                tags.unshift(all);
                res.send(tags);
                return [2 /*return*/];
        }
    });
}); }));
// router.get("/", (req, res) => {
//   res.send(sample_foods);
// });
router.get("/", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var foods;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, foodModel_1.FoodModel.find()];
            case 1:
                foods = _a.sent();
                res.send(foods);
                return [2 /*return*/];
        }
    });
}); }));
// router.get("/search/:searchTerm", (req, res) => {
//   const searchTerm = req.params.searchTerm;
//   const foods = sample_foods.filter((food) =>
//     food.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );
//   res.send(foods);
// });
router.get("/search/:searchTerm", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var searchRegex, foods;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                searchRegex = new RegExp(req.params.searchTerm, "i");
                return [4 /*yield*/, foodModel_1.FoodModel.find({
                        name: { $regex: searchRegex },
                    })];
            case 1:
                foods = _a.sent();
                res.send(foods);
                return [2 /*return*/];
        }
    });
}); }));
// router.get("/:id", (req, res) => {
//   const foodId = req.params.id;
//   const foods = sample_foods.filter((food) => food.id == foodId);
//   res.send(foods);
// });
router.get("/:id", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var foodId, foods;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                foodId = req.params.id;
                return [4 /*yield*/, foodModel_1.FoodModel.findById(foodId)];
            case 1:
                foods = _a.sent();
                // console.log(`this is food of ${foodId}`,foods);
                res.send(foods);
                return [2 /*return*/];
        }
    });
}); }));
// router.get("/tag/:tagName", asyncHandler(async(req:any, res:any) => {
//   const tagName = req.params.tagName;
//   if (tagName == "All") {
//     res.send(sample_foods);
//   }
//   const foods = sample_foods.filter((food) => food.tags?.includes(tagName));
//   res.send(foods);
// })
// );
router.get("/tag/:tagName", (0, express_async_handler_1.default)(function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var foods_1, searchRegex, foods;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!(req.params.tagName == "All")) return [3 /*break*/, 2];
                return [4 /*yield*/, foodModel_1.FoodModel.find()];
            case 1:
                foods_1 = _a.sent();
                res.send(foods_1);
                _a.label = 2;
            case 2:
                searchRegex = new RegExp(req.params.tagName, "i");
                return [4 /*yield*/, foodModel_1.FoodModel.find({
                        tags: { $regex: searchRegex },
                    })];
            case 3:
                foods = _a.sent();
                res.send(foods);
                return [2 /*return*/];
        }
    });
}); }));
exports.default = router;
