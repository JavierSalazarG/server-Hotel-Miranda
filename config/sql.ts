import mysql, { type Connection, type ConnectionOptions } from "mysql2/promise";
require("dotenv").config();

const SQL_DB: string = process.env.SQL_DB as string;
const SQL_USER: string = process.env.SQL_USER as string;
const SQL_PASSWORD: string = process.env.SQL_PASSWORD as string;

export const connectSQL = async (): Promise<Connection> => {
  try {
    console.log({
      host: "localhost",
      user: SQL_USER,
      password: SQL_PASSWORD,
      database: SQL_DB,
    });
    const connection = await mysql.createConnection({
      host: "localhost",
      user: SQL_USER,
      password: SQL_PASSWORD,
      database: SQL_DB,
    });
    console.log("Conexión a MariaDB establecida correctamente");
    return connection;
  } catch (e) {
    console.error("Error al conectar:", e);
    throw e;
  }
};
