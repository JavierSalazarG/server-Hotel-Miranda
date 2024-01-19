import { BookingInterface, BookingModel } from "../models/booking";
import { connectSQL } from "../config/sql";
export const allBookings = async (): Promise<any> => {
  try {
    const connection = await connectSQL();
    const [resoponse] = await connection.execute("SELECT * FROM bookings");
    return resoponse;
  } catch (e) {
    console.error(e);
  }
};
export const bookingById = async (id: string): Promise<any | undefined> => {
  try {
    const connection = await connectSQL();
    const [resoponse] = await connection.execute(
      `SELECT * FROM bookings WHERE _id = ${id}`
    );
    return resoponse;
  } catch {
    console.error("error al obtener room por id");
  }
};
// export const newBooking = async (
//   body: BookingInterface
// ): Promise<BookingInterface> => {
//   try {
//     const booking = new BookingModel(body);
//     await booking.save();
//     return booking.toObject();
//   } catch (error) {
//     console.error("Error al crear nueva reserva:", error);
//     throw error;
//   }
// };
// export const updateBooking = async (
//   id: string,
//   updates: Partial<BookingInterface>
// ): Promise<BookingInterface | null> => {
//   try {
//     const booking = await BookingModel.findOneAndUpdate({ id }, updates, {
//       new: true,
//     });

//     if (!booking) {
//       console.log("Reserva no encontrada");
//       return null;
//     }

//     console.log("Reserva actualizada con éxito");
//     return booking.toObject();
//   } catch (error) {
//     console.error("Error al actualizar reserva:", error);
//     throw error;
//   }
// };

export const deleteBooking = async (id: string) => {
  try {
    const connection = await connectSQL();
    const [res] = await connection.execute(
      `DELETE FROM bookings WHERE _id = ${id}`
    );
    return res;
  } catch (error) {
    console.error("error al borrar");
  }
};
