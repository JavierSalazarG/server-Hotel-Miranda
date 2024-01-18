import { strict } from "assert";
import Joi from "joi";
export interface RoomsInterface {
  imgs: string[];
  roomNumber: number;
  bedType: string;
  facilities: string[];
  rate: number;
  offerPrice: number;
  status: boolean;
  description?: string;
  start_date?: string | null;
}

export const roomsJoi = Joi.object({
  imgs: Joi.array().required(),
  roomNumber: Joi.number().required(),
  bedType: Joi.string().required(),
  facilities: Joi.array().required(),
  rate: Joi.number().required(),
  offerPrice: Joi.number().required(),
  status: Joi.boolean().required(),
  description: Joi.string(),
  start_date: Joi.string(),
});
