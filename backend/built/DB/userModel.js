"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = exports.UserSchema = void 0;
var mongoose_1 = require("mongoose");
exports.UserSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: { type: String, required: true },
    isAdmin: { type: Boolean, required: true },
}, {
    toJSON: {
        // virtuals wiil be generated by the database
        // so we want our userid to be used by mongoose ie _id
        // we need to allow virtuals to true
        virtuals: true
    },
    toObject: {
        // when you get value from db and you want to work in code with it
        virtuals: true
    },
    timestamps: true
});
exports.UserModel = (0, mongoose_1.model)('user', exports.UserSchema);