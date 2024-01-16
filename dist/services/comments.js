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
exports.deleteComment = exports.updateComment = exports.newComment = exports.commentById = exports.allComments = void 0;
const comments_1 = require("../models/comments");
const allComments = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield comments_1.commentsModel.find();
});
exports.allComments = allComments;
const commentById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comment = yield comments_1.commentsModel.findOne({ id });
        return comment || undefined;
    }
    catch (_a) {
        console.error("error al obtener comment por id");
    }
});
exports.commentById = commentById;
const newComment = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comment = new comments_1.commentsModel(body);
        yield comment.save();
        return comment.toObject();
    }
    catch (error) {
        console.error("Error al crear el Comment:", error);
        throw error;
    }
});
exports.newComment = newComment;
const updateComment = (id, updates) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comment = yield comments_1.commentsModel.findOneAndUpdate({ id }, updates, {
            new: true,
        });
        if (!comment) {
            console.log("Comment no encontrada");
            return null;
        }
        console.log("Comment actualizada con éxito");
        return comment.toObject();
    }
    catch (error) {
        console.error("Error al actualizar comentario:", error);
        throw error;
    }
});
exports.updateComment = updateComment;
const deleteComment = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield comments_1.commentsModel.deleteOne({ id });
    }
    catch (error) {
        console.error("error al borrar");
    }
});
exports.deleteComment = deleteComment;
