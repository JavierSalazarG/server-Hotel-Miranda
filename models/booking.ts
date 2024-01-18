import Joi from "joi";
export interface BookingInterface {
  id_habitacion?: number;
  nombre: string;
  apellidos: string;
  fecha_reserva: string;
  check_in: string;
  check_out: string;
  ha_anadido_mensaje: boolean;
  mensaje: string | null;
  tipo_habitacion: string;
  numero_habitacion: number;
  status: string;
}

export const bookingJoi = Joi.object({
  id_habitacion: Joi.number().required(),
  nombre: Joi.string().required(),
  apellidos: Joi.string().required(),
  fecha_reserva: Joi.date().required(),
  check_in: Joi.date().required(),
  check_out: Joi.date().required(),
  ha_anadido_mensaje: Joi.boolean().required(),
  mensaje: Joi.string(),
  tipo_habitacion: Joi.string().required(),
  numero_habitacion: Joi.number().required(),
  status: Joi.boolean().required(),
});
