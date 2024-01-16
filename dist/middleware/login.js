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
exports.loginAuthenticationMiddleware = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const KEY_ENV = process.env.JWT_SECRET;
const loginAuthenticationMiddleware = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const auth = req.headers["authorization"];
    if (!auth) {
        return res
            .status(401)
            .json({ error: true, message: 'La autorización no está en el encabezado' });
    }
    const token = auth.split('Bearer ')[1];
    if (!token) {
        return res.status(401).json({ error: 'No autorizado' });
    }
    else {
        if (KEY_ENV) {
            try {
                const perfil = yield jsonwebtoken_1.default.verify(token, KEY_ENV);
                req.perfil = perfil;
                next();
            }
            catch (err) {
                console.error('Error al verificar el token:', err);
                return res.status(403).json({ error: 'Error en el token' });
            }
        }
        else {
            console.error('La clave JWT no está configurada correctamente');
            return res.status(500).json({ error: 'Error interno del servidor' });
        }
    }
});
exports.loginAuthenticationMiddleware = loginAuthenticationMiddleware;
