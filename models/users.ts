import { Schema, model } from "mongoose";

export interface UsersInterface {
  id: string;
  nombre: string;
  foto: string | null;
  email: string;
  start_date: string;
  description: string;
  contact: number;
  status: boolean;
}

const usersSchema = new Schema<UsersInterface>({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  nombre: String,
  foto: String,
  email: String,
  start_date: String,
  description: String,
  contact: Number,
  status: Boolean,
});

export const UsersModel = model<UsersInterface>("users", usersSchema);
