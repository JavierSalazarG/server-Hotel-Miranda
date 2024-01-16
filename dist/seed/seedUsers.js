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
const users_1 = require("../models/users");
const faker_1 = require("@faker-js/faker");
function createUsers() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, mongo_1.connectMongo)();
            for (let index = 0; index <= 10; index++) {
                const status = faker_1.faker.datatype.boolean({ probability: 0.5 });
                const user = new users_1.UsersModel({
                    photo: faker_1.faker.image.avatar(),
                    nombre: faker_1.faker.person.fullName(),
                    email: faker_1.faker.internet.email(),
                    start_date: faker_1.faker.date.past().toLocaleDateString(),
                    description: faker_1.faker.lorem.sentence(),
                    contact: faker_1.faker.number.int({ min: 111111111, max: 999999999 }),
                    status: status,
                });
                yield user.save();
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
createUsers();
