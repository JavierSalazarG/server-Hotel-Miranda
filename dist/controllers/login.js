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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginRouter = void 0;
const express_1 = __importDefault(require("express"));
exports.loginRouter = express_1.default.Router();
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const KEY_ENV = process.env.JWT_SECRET || "";
exports.loginRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        return res
            .status(400)
            .json({ error: "Faltan email o password en la solicitud" });
    }
    if (email === "admin@admin.com" && password === "admin") {
        try {
            const token = jsonwebtoken_1.default.sign({ email }, KEY_ENV);
            return res.status(200).json({ token, status: "ok" });
        }
        catch (error) {
            console.error("Error al generar el token:", error);
            return res
                .status(500)
                .json({ error: "Error interno al generar el token" });
        }
    }
    res.status(401).json({ error: "Credenciales incorrectas" });
}));
