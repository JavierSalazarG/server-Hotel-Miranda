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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRoom = exports.updateRoom = exports.newRoom = exports.roomById = exports.allRooms = void 0;
const rooms_1 = require("../models/rooms");
const allRooms = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield rooms_1.RoomModel.find();
});
exports.allRooms = allRooms;
const roomById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const room = yield rooms_1.RoomModel.findOne({ id });
        return room || undefined;
    }
    catch (_a) {
        console.error("error al obtener room por id");
    }
});
exports.roomById = roomById;
const newRoom = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const room = new rooms_1.RoomModel(body);
        yield room.save();
        return room.toObject();
    }
    catch (error) {
        console.error("Error al crear la room:", error);
        throw error;
    }
});
exports.newRoom = newRoom;
const updateRoom = (id, updates) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const room = yield rooms_1.RoomModel.findOneAndUpdate({ id }, updates, {
            new: true,
        });
        if (!room) {
            console.log("room no encontrada");
            return null;
        }
        console.log("room actualizada con éxito");
        return room.toObject();
    }
    catch (error) {
        console.error("Error al actualizar room:", error);
        throw error;
    }
});
exports.updateRoom = updateRoom;
const deleteRoom = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield rooms_1.RoomModel.deleteOne({ id });
    }
    catch (error) {
        console.error("error al borrar");
    }
});
exports.deleteRoom = deleteRoom;
