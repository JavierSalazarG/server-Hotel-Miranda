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
exports.roomsRouter = void 0;
const express_1 = require("express");
const rooms_1 = require("../services/rooms");
const rooms_2 = require("../services/rooms");
exports.roomsRouter = (0, express_1.Router)();
exports.roomsRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const rooms = yield (0, rooms_1.allRooms)();
        res.send(rooms);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener comentarios" });
    }
}));
exports.roomsRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = req.params.id;
        const room = yield (0, rooms_2.roomById)(id);
        if (!room) {
            return res.status(404).json({ error: "room no encontrado" });
        }
        res.send(room);
    }
    catch (error) {
        console.error(error);
    }
}));
exports.roomsRouter.post("/new", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comment = yield (0, rooms_1.newRoom)(req.body);
        res.json([{ success: "Creado con éxito" }]);
        res.send(comment);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al crear el room" });
    }
}));
exports.roomsRouter.patch("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const updates = req.body;
        const updatedComment = yield (0, rooms_1.updateRoom)(id, updates);
        if (!updatedComment) {
            return res.status(404).json({ error: "room no encontrado" });
        }
        res.json(updatedComment);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al actualizar El commentario" });
    }
}));
exports.roomsRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = yield (0, rooms_1.deleteRoom)(id);
    if (data) {
        res.json([{ success: "room se ha borrado con exito" }]);
    }
    else {
        res.status(404).json({});
    }
}));
