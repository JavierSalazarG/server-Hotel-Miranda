// import mongoose from "mongoose";
// import { connectMongo } from "../config/mongo";
// import { UsersModel } from "../models/users";
// import { faker } from "@faker-js/faker";
// async function createUsers() {
//   try {
//     await connectMongo();

//     for (let index = 0; index <= 10; index++) {
//       const status = faker.datatype.boolean({ probability: 0.7 });
//       const user = new UsersModel({
//         photo: faker.image.avatar(),
//         nombre: faker.person.fullName(),
//         email: faker.internet.email(),
//         start_date: faker.date.past().toLocaleDateString(),
//         description: faker.lorem.sentence(),
//         contact: faker.number.int({ min: 111111111, max: 999999999 }),
//         status: status,
//       });
//       await user.save();
//     }
//   } catch (error) {
//     console.error(error);
//   } finally {
//     mongoose.connection.close();
//   }
// }
// createUsers();
