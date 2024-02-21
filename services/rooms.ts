import { RoomModel, RoomsInterface } from "../models/rooms";

export const allRooms = async (): Promise<RoomsInterface[]> => {
  return await RoomModel.find();
};
export const roomById = async (
  id: string
): Promise<RoomsInterface | undefined> => {
  try {
    const room = await RoomModel.findOne({ id });
    return room || undefined;
  } catch {
    console.error("error al obtener room por id");
  }
};
export const newRoom = async (
  body: RoomsInterface
): Promise<RoomsInterface> => {
  try {
    const room = new RoomModel(body);
    await room.save();
    return room.toObject();
  } catch (error) {
    console.error("Error al crear la room:", error);
    throw error;
  }
};

export const updateRoom = async (
  id: string,
  updates: Partial<RoomsInterface>
): Promise<RoomsInterface | null> => {
  try {
    const room = await RoomModel.findOneAndUpdate({ id }, updates, {
      new: true,
    });

    if (!room) {
      console.log("room no encontrada");
      return null;
    }

    console.log("room actualizada con éxito");
    return room.toObject();
  } catch (error) {
    console.error("Error al actualizar room:", error);
    throw error;
  }
};

export const deleteRoom = async (id: string) => {
  try {
    return await RoomModel.deleteOne({ id });
  } catch (error) {
    console.error("error al borrar el room");
  }
};
