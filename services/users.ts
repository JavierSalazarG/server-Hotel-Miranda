import { UsersInterface, UsersModel } from "../models/users";
import { connectSQL } from "../config/sql";

export const fetchAllUsers = async (): Promise<any> => {
  try {
    const connection = await connectSQL();
    const [resoponse] = await connection.execute("SELECT * FROM users");
    return resoponse;
  } catch (e) {
    console.error(e);
  }
};

export const fetchUserById = async (id: string): Promise<any | null> => {
  try {
    const connection = await connectSQL();
    const [resoponse] = await connection.execute(
      `SELECT * FROM users WHERE _id = ${id}`
    );
    return resoponse;
  } catch {
    console.error("error al obtener room por id");
  }
};

export const newUser = async (
  user: UsersInterface
): Promise<UsersInterface> => {
  try {
    const connection = await connectSQL();
    const userQuery = `
    INSERT INTO users (photo, nombre, email, start_date, description, contact, status)
          VALUES (?, ?, ?, ?, ?, ?,?);
    `;
    connection.execute(userQuery, [
      user.photo,
      user.nombre,
      user.email,
      user.start_date,
      user.description,
      user.contact,
      user.status,
    ]);
    console.log("user creado con éxito");
    return user;
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    throw error;
  }
};

// export const updateUser = async (
//   id: string,
//   updates: Partial<UsersInterface>
// ): Promise<UsersInterface | null> => {
//   try {
//     const user = await UsersModel.findOneAndUpdate({ id }, updates, {
//       new: true,
//     });

//     if (!user) {
//       console.log("user no encontrada");
//       return null;
//     }

//     console.log("user actualizada con éxito");
//     return user.toObject();
//   } catch (error) {
//     console.error("Error al actualizar el user:", error);
//     throw error;
//   }
// };

export const deleteUser = async (id: string) => {
  try {
    const connection = await connectSQL();
    const [res] = await connection.execute(
      `DELETE FROM users WHERE _id = ${id}`
    );
    return res;
  } catch (error) {
    console.error("error al borrar");
  }
};
