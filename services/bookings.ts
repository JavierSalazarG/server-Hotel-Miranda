import { BookingInterface, BookingModel } from "../models/booking";

export const fetchAllBookings = async (): Promise<BookingInterface[]> => {
  return await BookingModel.find();
};

export const fetchBookingById = async (
  id: string
): Promise<BookingInterface | null> => {
  try {
    const booking = await BookingModel.findOne({ id });

    return booking || null;
  } catch (error) {
    console.error("Error al obtener reserva por ID:", error);
    throw error;
  }
};

export const newBooking = async (
  body: BookingInterface
): Promise<BookingInterface> => {
  try {
    const booking = new BookingModel(body);
    await booking.save();
    return booking.toObject();
  } catch (error) {
    console.error("Error al crear nueva reserva:", error);
    throw error;
  }
};
export const updateBooking = async (
  id: string,
  updates: Partial<BookingInterface>
): Promise<BookingInterface | null> => {
  try {
    const booking = await BookingModel.findOneAndUpdate({ id }, updates, {
      new: true,
    });

    if (!booking) {
      console.log("Reserva no encontrada");
      return null;
    }

    console.log("Reserva actualizada con éxito");
    return booking.toObject();
  } catch (error) {
    console.error("Error al actualizar reserva:", error);
    throw error;
  }
};
export const deleteBooking = async (id: string) => {
  try {
    return await BookingModel.deleteOne({ id });
  } catch (error) {
    console.error("error al borrar");
  }
};
