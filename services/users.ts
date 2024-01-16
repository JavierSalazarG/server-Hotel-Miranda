// import { UsersInterface, UsersModel } from "../models/users";

// export const fetchAllUsers = async (): Promise<UsersInterface[]> => {
//   return await UsersModel.find();
// };

// export const fetchUserById = async (
//   id: string
// ): Promise<UsersInterface | null> => {
//   try {
//     const user = await UsersModel.findOne({ id });

//     return user || null;
//   } catch (error) {
//     console.error("Error al obtener el user por ID:", error);
//     throw error;
//   }
// };

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
