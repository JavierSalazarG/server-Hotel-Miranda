import mongoose, { Schema } from "mongoose";
export interface BookingInterface {
  id: string;
  id_habitacion?: string;
  nombre: string;
  apellidos: string;
  fecha_reserva: string;
  check_in: string;
  check_out: string;
  ha_anadido_mensaje: boolean;
  mensaje: string | null;
  bedType: string;
  numero_habitacion: number;
  status: string;
}

const bookingSchema = new Schema({
  id: { type: String, require: true, unique: true },
  id_habitacion: String,
  nombre: String,
  apellidos: String,
  fecha_reserva: String,
  check_in: String,
  check_out: String,
  ha_anadido_mensaje: Boolean,
  mensaje: { type: String, require: false },
  bedType: String,
  numero_habitacion: Number,
  status: String,
});
export const BookingModel = mongoose.model<BookingInterface>(
  "Booking",
  bookingSchema
);
