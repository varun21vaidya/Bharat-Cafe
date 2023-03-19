"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var food_router_1 = __importDefault(require("./router/food.router"));
var user_router_1 = __importDefault(require("./router/user.router"));
var order_router_1 = __importDefault(require("./router/order.router"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
console.log("in server", process.env.JWT_SECRET);
// connect to db
var config_1 = require("./DB/config");
(0, config_1.connectDB)();
var app = (0, express_1.default)();
// to be able to send json responses
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    credentials: true,
    origin: ["http://localhost:4200"],
}));
// we have shifted all food related api to food.router.ts so use that
app.use("/api/foods", food_router_1.default);
// we have shifted all user related api to user.router.ts so use that
app.use("/api/users", user_router_1.default);
app.use("/api/orders", order_router_1.default);
var port = 5000;
app.listen(port, function () {
    console.log("website serving on http://localhost:" + port);
});
