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
exports.commentsRouter = void 0;
const express_1 = require("express");
const comments_1 = require("../services/comments");
const comments_2 = require("../services/comments");
exports.commentsRouter = (0, express_1.Router)();
exports.commentsRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comment = yield (0, comments_1.allComments)();
        res.send(comment);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener comentarios" });
    }
}));
exports.commentsRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let id = req.params.id;
        const comment = yield (0, comments_2.commentById)(id);
        if (!comment) {
            return res.status(404).json({ error: "Comment no encontrado" });
        }
        res.send(comment);
    }
    catch (error) {
        console.error(error);
    }
}));
exports.commentsRouter.post("/new", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comment = yield (0, comments_1.newComment)(req.body);
        res.json([{ success: "Creado con éxito" }]);
        res.send(comment);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al crear el comment" });
    }
}));
exports.commentsRouter.patch("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const updates = req.body;
        const updatedComment = yield (0, comments_1.updateComment)(id, updates);
        if (!updatedComment) {
            return res.status(404).json({ error: "Comment no encontrado" });
        }
        res.json(updatedComment);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al actualizar El commentario" });
    }
}));
exports.commentsRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const data = yield (0, comments_1.deleteComment)(id);
    if (data) {
        res.json([{ success: "comment se ha borrado con exito" }]);
    }
    else {
        res.status(404).json({});
    }
}));
