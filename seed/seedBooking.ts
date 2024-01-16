import { faker } from "@faker-js/faker";
import mongoose from "mongoose";
import { connectMongo } from "../config/mongo";
import { BookingModel } from "../models/booking";
import { RoomModel } from "../models/rooms";
async function createBooking() {
  try {
    await connectMongo();
    const room = await RoomModel.find();

    for (let index = 0; index <= 10; index++) {
      if (room.length > 0) {
        const randomIndex = Math.floor(Math.random() * room.length);
        const randomRoomId = room[randomIndex];

        const check_in = faker.date.past({
          years: 1,
          refDate: "2024-01-31T00:00:00.000Z",
        });
        const dateOut = faker.date.soon({ days: 5, refDate: check_in });
        const description = faker.datatype.boolean({ probability: 0.6 });
        const booking = new BookingModel({
          id_habitacion: randomRoomId._id.toString(),
          nombre: faker.person.fullName(),
          apellidos: faker.person.lastName(),
          fecha_reserva: Date.now().toString(),
          check_in: check_in.toString(),
          check_out: dateOut.toString(),
          ha_anadido_mensaje: description,
          mensaje: description ? faker.lorem.lines({ min: 1, max: 3 }) : null,
          tipo_habitacion: randomRoomId.bedType,
          numero_habitacion: faker.number.int({ min: 11, max: 999 }),
          status: true,
        });
        await booking.save();
      } else {
        console.error("No hay rooms disponibles para crear un booking.");
      }
    }
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.connection.close();
  }
}

createBooking();
