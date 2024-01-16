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

  try {
    console.log("desde seddTablas");
    const connectionSQL = await connectSQL();
    const [resultComments] = await connectionSQL.query(createCommentsTable);

    console.log("resultado tabla:", resultComments);
    await connectionSQL.end();
  } catch (e) {
    console.error("Error al crear en sql:", e);
  }
};

createTablesSQL();
