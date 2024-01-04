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
const mongo_1 = require("../config/mongo");
const faker_1 = require("@faker-js/faker");
const rooms_1 = require("../models/rooms");
const mongoose_1 = __importDefault(require("mongoose"));
function createRoom() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, mongo_1.connectMongo)();
            const bedType = [
                "dobe",
                "Single",
                "Twin",
                "Suite Junior",
                "Executive Suite",
                "Family room",
                "Accessible Room",
            ];
            for (let index = 0; index < 10; index++) {
                if (bedType.length > 0) {
                    const randomType = Math.floor(Math.random() * bedType.length);
                    const description = faker_1.faker.datatype.boolean({ probability: 0.6 });
                    const room = new rooms_1.RoomModel({
                        imgs: {
                            img1: faker_1.faker.image.url(),
                            img2: faker_1.faker.image.url(),
                        },
                        roomNumber: faker_1.faker.number.int({ min: 111111111, max: 999999999 }),
                        id: faker_1.faker.number.hex({ min: 0, max: 65535 }),
                        bedType: bedType[randomType],
                        facilities: [faker_1.faker.string.alpha(), faker_1.faker.string.alpha()],
                        rate: faker_1.faker.number.float({ min: 20, max: 700, precision: 0.01 }),
                        offerPrice: faker_1.faker.number.int({ max: 100 }),
                        status: true,
                        description: description,
                        start_date: description
                            ? faker_1.faker.lorem.lines({ min: 1, max: 3 })
                            : null,
                    });
                    yield room.save();
                }
                else {
                    console.error("No hay tipos");
                }
            }
        }
        catch (error) {
            console.error("Error al guardar la habitación:", error);
        }
        finally {
            mongoose_1.default.connection.close();
        }
    });
}
createRoom();
