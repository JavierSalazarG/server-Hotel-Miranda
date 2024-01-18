import { sqlQuery } from "../config/sql";
import { faker } from "@faker-js/faker";

async function createComments() {
  try {
    for (let i = 0; i < 15; i++) {
      await sqlQuery(
        "INSERT INTO contacts (_id,fecha, foto_perfil, archive, comentario) VALUES (?, ?, ?, ?, ?)",
        [
          faker.database.mongodbObjectId(),
          faker.person.fullName(),
          faker.date.past().toLocaleDateString(),
          faker.image.avatarLegacy(),
          false,
          faker.lorem.sentence(),
        ]
      );
    }
  } catch (e) {
    console.error(e);
  }
}

createComments();
