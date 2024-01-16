// import { connectMongo } from "../config/mongo";
// import { faker } from "@faker-js/faker";
// import { RoomModel } from "../models/rooms";
// import mongoose from "mongoose";

// async function createRoom() {
//   try {
//     await connectMongo();
//     const bedType = [
//       "dobe",
//       "Single",
//       "Twin",
//       "Suite Junior",
//       "Executive Suite",
//       "Family room",
//       "Accessible Room",
//     ];
//     for (let index = 0; index < 10; index++) {
//       if (bedType.length > 0) {
//         const randomType = Math.floor(Math.random() * bedType.length);
//         const description = faker.datatype.boolean({ probability: 0.6 });
//         const room = new RoomModel({
//           imgs: {
//             img1: faker.image.url(),
//             img2: faker.image.url(),
//           },
//           roomNumber: faker.number.int({ min: 111111111, max: 999999999 }),
//           bedType: bedType[randomType],
//           facilities: [faker.string.alpha(), faker.string.alpha()],
//           rate: faker.number.float({ min: 20, max: 700, precision: 0.01 }),
//           offerPrice: faker.number.int({ max: 100 }),
//           status: true,
//           description: description,
//           start_date: description
//             ? faker.lorem.lines({ min: 1, max: 3 })
//             : null,
//         });
//         await room.save();
//       } else {
//         console.error("No hay tipos");
//       }
//     }
//   } catch (error) {
//     console.error("Error al guardar la habitación:", error);
//   } finally {
//     mongoose.connection.close();
//   }
// }

// createRoom();
