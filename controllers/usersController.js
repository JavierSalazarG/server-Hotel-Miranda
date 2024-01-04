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
exports.usersRouter = void 0;
const express_1 = require("express");
const users_1 = require("../services/users");
exports.usersRouter = (0, express_1.Router)();
exports.usersRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, users_1.fetchAllUsers)();
        res.send(users);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener users" });
    }
}));
exports.usersRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const user = yield (0, users_1.fetchUserById)(id);
        if (!user) {
            return res.status(404).json({ error: "user no encontrada" });
        }
        res.send(user);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener user por ID" });
    }
}));
exports.usersRouter.post("/new", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield (0, users_1.newUser)(req.body);
        res.json([{ success: "Creado con éxito" }]);
        res.send(user);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al crear el user" });
    }
}));
exports.usersRouter.patch("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const updates = req.body;
        const updatedUser = yield (0, users_1.updateUser)(id, updates);
        if (!updatedUser) {
            return res.status(404).json({ error: "user no encontrada" });
        }
        res.json(updatedUser);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al actualizar el user" });
    }
}));
exports.usersRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = yield (0, users_1.deleteUser)(id);
    if (data) {
        res.json([{ success: "user se ha borrado con exito" }]);
    }
    else {
        res.status(404).json({});
    }
}));
