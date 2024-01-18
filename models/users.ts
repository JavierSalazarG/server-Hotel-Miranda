import Joi from "joi";
export interface UsersInterface {
  photo: string | null;
  nombre: string;
  email: string;
  start_date: string;
  description: string;
  contact: number;
  status: boolean;
}

export const usersJoi = Joi.object({
  photo: Joi.string().required(),
  nombre: Joi.string().required(),
  email: Joi.string().required(),
  start_date: Joi.date().required(),
  description: Joi.string().required(),
  contact: Joi.number().required(),
  status: Joi.boolean().required(),
});
