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

// export const newUser = async (
//   body: UsersInterface
// ): Promise<UsersInterface> => {
//   try {
//     const user = new UsersModel(body);
//     await user.save();
//     return user.toObject();
//   } catch (error) {
//     console.error("Error al crear el usuario:", error);
//     throw error;
//   }
// };

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
// export const deleteUser = async (id: string) => {
//   try {
//     return await UsersModel.deleteOne({ id });
//   } catch (error) {
//     console.error("error al borrar");
//   }
// };
