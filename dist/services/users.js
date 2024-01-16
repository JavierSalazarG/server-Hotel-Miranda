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
exports.deleteUser = exports.updateUser = exports.newUser = exports.fetchUserById = exports.fetchAllUsers = void 0;
const users_1 = require("../models/users");
const fetchAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    return yield users_1.UsersModel.find();
});
exports.fetchAllUsers = fetchAllUsers;
const fetchUserById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield users_1.UsersModel.findOne({ id });
        return user || null;
    }
    catch (error) {
        console.error("Error al obtener el user por ID:", error);
        throw error;
    }
});
exports.fetchUserById = fetchUserById;
const newUser = (body) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new users_1.UsersModel(body);
        yield user.save();
        return user.toObject();
    }
    catch (error) {
        console.error("Error al crear el usuario:", error);
        throw error;
    }
});
exports.newUser = newUser;
const updateUser = (id, updates) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield users_1.UsersModel.findOneAndUpdate({ id }, updates, {
            new: true,
        });
        if (!user) {
            console.log("user no encontrada");
            return null;
        }
        console.log("user actualizada con éxito");
        return user.toObject();
    }
    catch (error) {
        console.error("Error al actualizar el user:", error);
        throw error;
    }
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield users_1.UsersModel.deleteOne({ id });
    }
    catch (error) {
        console.error("error al borrar");
    }
});
exports.deleteUser = deleteUser;
