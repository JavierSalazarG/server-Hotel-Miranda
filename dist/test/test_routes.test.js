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
const supertest = require('supertest');
const server_1 = __importDefault(require("../server"));
describe('Login', () => {
    it('Datos de login mal, devuelve error: 400', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield supertest(server_1.default).post('/login').send({ "email": "email", "password": "password" });
        expect(res.statusCode).toEqual(401);
    }), 5000);
    it('Datos de login estan bien, devuelve 200', () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield supertest(server_1.default).post('/login').send({ "email": "admin@admin.com", "password": "admin" });
        expect(res.statusCode).toEqual(200);
    }), 5000);
});
describe('bookin', () => {
});
