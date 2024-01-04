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
const faker_1 = require("@faker-js/faker");
const mongoose_1 = __importDefault(require("mongoose"));
const mongo_1 = require("../config/mongo");
const booking_1 = require("../models/booking");
const rooms_1 = require("../models/rooms");
function createBooking() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield (0, mongo_1.connectMongo)();
            const room = yield rooms_1.RoomModel.find();
            for (let index = 0; index <= 10; index++) {
                if (room.length > 0) {
                    const randomIndex = Math.floor(Math.random() * room.length);
                    const randomRoomId = room[randomIndex];
                    const check_in = faker_1.faker.date.past({
                        years: 1,
                        refDate: "2024-01-31T00:00:00.000Z",
                    });
                    const dateOut = faker_1.faker.date.soon({ days: 5, refDate: check_in });
                    const description = faker_1.faker.datatype.boolean({ probability: 0.6 });
                    const booking = new booking_1.BookingModel({
                        id: faker_1.faker.number.hex({ min: 0, max: 65535 }),
                        id_habitacion: randomRoomId.id.toString(),
                        nombre: faker_1.faker.person.fullName(),
                        apellidos: faker_1.faker.person.lastName(),
                        fecha_reserva: Date.now().toString(),
                        check_in: check_in.toString(),
                        check_out: dateOut.toString(),
                        ha_anadido_mensaje: description,
                        mensaje: description ? faker_1.faker.lorem.lines({ min: 1, max: 3 }) : null,
                        bedType: randomRoomId.bedType,
                        numero_habitacion: faker_1.faker.number.int({ min: 11, max: 999 }),
                        status: true,
                    });
                    yield booking.save();
                }
                else {
                    console.error("No hay rooms disponibles para crear un booking.");
                }
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
createBooking();
