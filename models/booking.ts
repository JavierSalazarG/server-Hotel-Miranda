import Joi from "joi";
export interface BookingInterface {
  id_habitacion?: string;
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
  id_habitacion: Joi.array().required(),
  nombre: Joi.array().required(),
  apellidos: Joi.array().required(),
  fecha_reserva: Joi.array().required(),
  check_in: Joi.array().required(),
  check_out: Joi.array().required(),
  ha_anadido_mensaje: Joi.boolean().required(),
  mensaje: Joi.string(),
  tipo_habitacion: Joi.string().required(),
  numero_habitacion: Joi.number().required(),
  status: Joi.boolean().required(),
});
