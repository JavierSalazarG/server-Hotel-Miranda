import mongoose, { Schema } from "mongoose";
export interface CommentsInterface {
  id: string;
  nombre: string;
  fecha: string;
  foto_perfil: string;
  archive: boolean;
  comentario: string | null;
}

const CommentsSchema = new Schema({
  id: { type: String, require: true, unique: true },
  nombre: String,
  fecha: String,
  foto_perfil: String,
  archive: Boolean,
  comentario: { type: String, require: false },
});

export const commentsModel = mongoose.model<CommentsInterface>(
  "comments",
  CommentsSchema
);
