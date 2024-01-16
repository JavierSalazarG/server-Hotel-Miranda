import Joi from "joi";
export interface CommentsInterface {
  nombre: string;
  fecha: string;
  foto_perfil: string;
  archive: boolean;
  comentario: string | null;
}

export const commentsJoi = Joi.object({
  nombre: Joi.string().required(),
  fecha: Joi.string().required(),
  foto_perfil: Joi.string().required(),
  archive: Joi.boolean().required(),
  comentario: Joi.string(),
});
