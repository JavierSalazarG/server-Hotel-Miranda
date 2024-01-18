import { RoomsInterface } from "../models/rooms";
import { connectSQL } from "../config/sql";
export const allRooms = async (): Promise<any> => {
  try {
    const connection = await connectSQL();
    const [resoponse] = await connection.execute("SELECT * FROM rooms");
    return resoponse;
  } catch (e) {
    console.error(e);
  }
};
export const roomById = async (id: string): Promise<any | undefined> => {
  try {
    const connection = await connectSQL();
    const [resoponse] = await connection.execute(
      `SELECT * FROM rooms WHERE _id = ${id}`
    );
    return resoponse;
  } catch {
    console.error("error al obtener room por id");
  }
};
// export const updateRoom = async (
//   id: string,
//   updates: Partial<RoomsInterface>
// ): Promise<RoomsInterface | null> => {
//   try {
//     const room = await RoomModel.findOneAndUpdate({ id }, updates, {
//       new: true,
//     });

//     if (!room) {
//       console.log("room no encontrada");
//       return null;
//     }

//     console.log("room actualizada con éxito");
//     return room.toObject();
//   } catch (error) {
//     console.error("Error al actualizar room:", error);
//     throw error;
//   }
// };

export const deleteRoom = async (id: string) => {
  try {
    const connection = await connectSQL();
    const [res] = await connection.execute(
      `DELETE FROM rooms WHERE _id = ${id}`
    );
    return res;
  } catch (error) {
    console.error("error al borrar");
  }
};
