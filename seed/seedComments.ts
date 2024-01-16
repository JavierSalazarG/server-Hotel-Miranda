import mongoose from "mongoose";
import { connectMongo } from "../config/mongo";
import { commentsModel } from "../models/comments";
import { faker } from "@faker-js/faker";
async function createComments() {
  try {
    await connectMongo();
    for (let index = 0; index <= 10; index++) {
      const comment = new commentsModel({
        name: faker.person.fullName(),
        fecha: faker.date.past().toLocaleDateString(),
        foto_perfil: faker.image.avatarLegacy(),
        archive: false,
        comentario: faker.lorem.sentence(),
      });
      await comment.save();
    }
  } catch (error) {
    console.error(error);
  } finally {
    mongoose.connection.close();
  }
}

createComments();
