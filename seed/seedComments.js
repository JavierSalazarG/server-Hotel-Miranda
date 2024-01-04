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
const mongoose_1 = __importDefault(require("mongoose"));
const mongo_1 = require("../config/mongo");
const comments_1 = require("../models/comments");
const faker_1 = require("@faker-js/faker");
function createComments() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, mongo_1.connectMongo)();
            for (let index = 0; index <= 10; index++) {
                const comment = new comments_1.commentsModel({
                    id: faker_1.faker.number.hex({ min: 0, max: 65535 }),
                    name: faker_1.faker.person.fullName(),
                    fecha: faker_1.faker.date.past().toLocaleDateString(),
                    foto_perfil: faker_1.faker.image.avatarLegacy(),
                    archive: false,
                    comentario: faker_1.faker.lorem.sentence(),
                });
                yield comment.save();
            }
        }
        catch (error) {
            console.error(error);
        }
        finally {
            mongoose_1.default.connection.close();
        }
    });
}
createComments();
