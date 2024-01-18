import { connectSQL } from "../config/sql";

export const createTablesSQL = async () => {
  const createCommentsTable = `
    CREATE TABLE IF NOT EXISTS contacts (
    _id INT AUTO_INCREMENT PRIMARY KEY,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    foto_perfil VARCHAR(255),
    archive BOOLEAN,
    comentario TEXT    
);
    `;
  const createRoomsTable = `
    CREATE TABLE IF NOT EXISTS rooms (
    _id INT AUTO_INCREMENT PRIMARY KEY,
    imgs VARCHAR(255) NOT NULL,
    bedType VARCHAR(255) NOT NULL,
    facilities JSON,
    rate INT NOT NULL,
    offerPrice INT NOT NULL,
    status BOOLEAN NOT NULL,
    description VARCHAR(255),
    start_date VARCHAR(255)
);
    `;

  try {
    const connectionSQL = await connectSQL();
    const [resultComments] = await connectionSQL.query(createCommentsTable);
    const [resultRooms] = await connectionSQL.query(createRoomsTable);
    console.log("resultado tabla Comment:", resultComments);
    console.log("resultado tabla Rooms:", resultRooms);
    await connectionSQL.end();
  } catch (e) {
    console.error("Error al crear en sql:", e);
  }
};

createTablesSQL();
