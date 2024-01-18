import { faker } from "@faker-js/faker/locale/es";
import { connectSQL } from "../config/sql";

const createContactRandom = async () => {
  const connection = await connectSQL();

  for (let index = 0; index < 10; index++) {
    let fechaActual = new Date();
    let año = fechaActual.getFullYear();
    let mes = fechaActual.getMonth() + 1;
    let dia = fechaActual.getDate();
    let fechaFormateada =
      año +
      "/" +
      (mes < 10 ? "0" : "") +
      mes +
      "/" +
      (dia < 10 ? "0" : "") +
      dia;
    const contact = {
      nombre: faker.person.firstName(),
      fecha: fechaFormateada,
      foto_perfil: faker.image.avatar(),
      archive: false,
      comentario: faker.lorem.paragraph(2),
    };

    const sqlLlamada = `
    INSERT INTO contacts (nombre, fecha, foto_perfil, archive, comentario)
          VALUES (?, ?, ?, ?, ?);
    `;

    try {
      const [result] = await connection.execute(sqlLlamada, [
        contact.nombre,
        contact.fecha,
        contact.foto_perfil,
        contact.archive,
        contact.comentario,
      ]);
      console.log("Contact Resultado:", result);
    } catch (e) {
      console.error(e);
    }
  }
};

const createUsersRandom = async () => {
  const connection = await connectSQL();
  for (let index = 0; index < 10; index++) {
    let fechaActual = new Date();
    let año = fechaActual.getFullYear();
    let mes = fechaActual.getMonth() + 1;
    let dia = fechaActual.getDate();
    let fechaFormateada =
      año +
      "/" +
      (mes < 10 ? "0" : "") +
      mes +
      "/" +
      (dia < 10 ? "0" : "") +
      dia;
    const user = {
      photo: faker.image.avatar(),
      nombre: faker.person.firstName(),
      email: faker.internet.email(),
      start_date: fechaFormateada,
      description: faker.lorem.paragraph(1),
      contact: faker.phone.number().replace(/\D/g, ""),
      status: faker.datatype.boolean(),
    };
    const sqlLlamada = `
    INSERT INTO users (photo, nombre, email, start_date, description, contact, status)
          VALUES (?, ?, ?, ?, ?, ?,?);
    `;
    try {
      const [result] = await connection.execute(sqlLlamada, [
        user.photo,
        user.nombre,
        user.email,
        user.start_date,
        user.description,
        user.contact,
        user.status,
      ]);
      console.log("Contact Resultado:", result);
    } catch (e) {
      console.error(e);
    }
  }
};
createContactRandom();
createUsersRandom();
