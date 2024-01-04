"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModel = void 0;
const mongoose_1 = require("mongoose");
const usersSchema = new mongoose_1.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    nombre: String,
    foto: String,
    email: String,
    start_date: String,
    description: String,
    contact: Number,
    status: Boolean,
});
exports.UsersModel = (0, mongoose_1.model)("users", usersSchema);
