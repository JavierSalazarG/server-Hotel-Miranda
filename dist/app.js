"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const server_1 = __importDefault(require("./server"));
const cors = require("cors");
const mongo_1 = require("./config/mongo");
exports.app = (0, express_1.default)();
exports.app.use(cors());
const port = process.env.NODE_ENV === "test" ? 3000 : 30100;
(0, mongo_1.connectMongo)();
exports.app.use(express_1.default.json());
exports.app.use(server_1.default);
exports.app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
exports.default = exports.app;
