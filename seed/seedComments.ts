import { connectSQL } from "../config/sql";
import { commentsJoi } from "../models/comments";
import { faker } from "@faker-js/faker";
async function createComments() {
  try {
    await connectSQL();
  } catch (error) {
    console.error(error);
  }
}

createComments();
