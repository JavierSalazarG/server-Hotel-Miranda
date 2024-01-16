"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomModel = void 0;
const mongoose_1 = require("mongoose");
const roomSchema = new mongoose_1.Schema({
    imgs: {
        img1: String,
        img2: String,
        img3: String,
        img4: String,
        img5: String,
    },
    roomNumber: {
        type: Number,
        required: true,
    },
    bedType: {
        type: String,
        required: true,
    },
    facilities: {
        type: [String],
    },
    rate: {
        type: Number,
        required: true,
    },
    offerPrice: {
        type: Number,
        required: true,
    },
    status: {
        type: Boolean,
        default: true,
    },
    description: String,
    start_date: {
        type: String,
    },
});
exports.RoomModel = (0, mongoose_1.model)("Room", roomSchema);
