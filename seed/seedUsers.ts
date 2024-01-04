import mongoose from "mongoose";
import { connectMongo } from "../config/mongo";
import { UsersModel } from "../models/users";
import { faker } from "@faker-js/faker";
async function createUsers() {
  try {
    await connectMongo();
    for (let index = 0; index <= 10; index++) {
      const user = new UsersModel({
        id: faker.number.hex({ min: 0, max: 65535 }),
        name: faker.person.fullName(),
        photo: faker.image.avatarLegacy(),
        email: faker.internet.email(),
        contact: faker.number.int({ min: 111111111, max: 999999999 }),
        description: faker.lorem.sentence(),
        start_date: faker.date.past().toLocaleDateString(),
        status: true,
      });
      await user.save();
    }
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.connection.close();
  }
}
createUsers();
