"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
var mongoose_1 = require("mongoose");
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var connectDB = function () {
    (0, mongoose_1.connect(process.env.MONGO_CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }))
        .then(function () { return console.log("DB connection successful!"); })
        .catch(function (e) {
            console.log("error while connencting database");
            console.log(e);
        });
};
exports.connectDB = connectDB;
