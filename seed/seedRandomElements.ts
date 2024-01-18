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

const createRoomsRandom = async () => {
  const connection = await connectSQL();

  for (let index = 0; index < 10; index++) {
    const bedType = [
      "dobe",
      "Single",
      "Twin",
      "Suite Junior",
      "Executive Suite",
      "Family room",
      "Accessible Room",
    ];
    const facilidades_hotel = [
      "wifi_gratuito",
      "televisor_pantalla_plana",
      "aire_acondicionado",
      "servicio_habitacion",
      "bano_privado",
      "caja_fuerte",
      "secador_pelo",
      "estacion_trabajo",
      "cafetera_tetera",
      "servicio_limpieza_diario",
    ];

    const randomType = Math.floor(Math.random() * bedType.length);
    const getRandomFacilities = () => {
      const minFacilities = 3;
      const maxFacilities = facilidades_hotel.length;
      const numFacilities =
        Math.floor(Math.random() * (maxFacilities - minFacilities + 1)) +
        minFacilities;

      const randomFacilities: any = [];
      while (randomFacilities.length < numFacilities) {
        const randomIndex = Math.floor(
          Math.random() * facilidades_hotel.length
        );
        const facility = facilidades_hotel[randomIndex];

        if (!randomFacilities.includes(facility)) {
          randomFacilities.push(facility);
        }
      }

      return randomFacilities;
    };
    const description = faker.datatype.boolean({ probability: 0.6 });
    const room = {
      imgs: faker.image.avatar(),
      roomNumber: faker.number.int({ max: 500 }),
      bedType: bedType[randomType],
      facilities: getRandomFacilities(),
      rate: faker.number.float({ min: 20, max: 700, precision: 0.01 }),
      offerPrice: faker.number.int({ max: 100 }),
      status: "Available",
      description: description,
      start_date: description ? faker.lorem.lines({ min: 1, max: 3 }) : null,
    };
    const sqlLlamada = `
    INSERT INTO rooms (imgs, roomNumber, bedType, facilities, rate, offerPrice, status, description, start_date)
          VALUES (?, ?, ?, ?, ?, ?,?,?,?);
    `;
    try {
      const [result] = await connection.execute(sqlLlamada, [
        room.imgs,
        room.roomNumber,
        room.bedType,
        room.facilities,
        room.rate,
        room.offerPrice,
        room.status,
        room.description,
        room.start_date,
      ]);
      console.log("rooms Resultado:", result);
    } catch (e) {
      console.error(e);
    }
  }
};
createContactRandom();
createUsersRandom();
createRoomsRandom();
