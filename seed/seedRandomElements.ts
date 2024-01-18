import { faker } from "@faker-js/faker/locale/es";
import { connectSQL } from "../config/sql";
import { allRooms } from "../services/rooms";

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

const CreateBookingRandom = async () => {
  const connection = await connectSQL();
  const rooms = await allRooms();
  const random = Math.floor(Math.random() * rooms.length);
  const description = faker.datatype.boolean({ probability: 0.6 });
  const habitacion = rooms[random];
  let fechaActual = new Date();
  let año = fechaActual.getFullYear();
  let mes = fechaActual.getMonth() + 1;
  let dia = fechaActual.getDate();
  let fechaFormateada =
    año + "/" + (mes < 10 ? "0" : "") + mes + "/" + (dia < 10 ? "0" : "") + dia;
  for (let index = 0; index < 10; index++) {
    const booking = {
      id_habitacion: habitacion._id,
      nombre: faker.person.fullName(),
      apellidos: faker.person.lastName(),
      fecha_reserva: fechaFormateada,
      check_in: faker.date.soon().toISOString().split("T")[0],
      check_out: faker.date.future().toISOString().split("T")[0],
      ha_anadido_mensaje: description,
      mensaje: description ? faker.lorem.lines({ min: 1, max: 3 }) : null,
      tipo_habitacion: habitacion.bedType,
      numero_habitacion: habitacion.roomNumber,
      status: true,
    };
    const sqlLlamada = `
    INSERT INTO bookings (id_habitacion, nombre, apellidos, fecha_reserva, check_in, check_out, ha_anadido_mensaje, mensaje, tipo_habitacion, numero_habitacion, status)
          VALUES (?, ?, ?, ?, ?, ?,?,?,?, ? ,?);
    `;
    try {
      const [result] = await connection.execute(sqlLlamada, [
        booking.id_habitacion,
        booking.nombre,
        booking.apellidos,
        booking.fecha_reserva,
        booking.check_in,
        booking.check_out,
        booking.ha_anadido_mensaje,
        booking.mensaje,
        booking.tipo_habitacion,
        booking.numero_habitacion,
        booking.status,
      ]);
      console.log("rooms Resultado:", result);
    } catch (e) {
      console.error(e);
    }
  }
};
// createContactRandom();
// createUsersRandom();
//createRoomsRandom();

CreateBookingRandom();
