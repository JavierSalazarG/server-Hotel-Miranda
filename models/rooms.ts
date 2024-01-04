import { Schema, model } from "mongoose";

export interface RoomsInterface {
  imgs: {
    img1: string | null;
    img2: string | null;
    img3: string | null;
    img4: string | null;
    img5: string | null;
  };
  roomNumber: number;
  id: string;
  bedType: string;
  facilities: string[];
  rate: number;
  offerPrice: number;
  status: boolean;
  description?: string;
  start_date?: string | null;
}

const roomSchema = new Schema<RoomsInterface>({
  imgs: {
    img1: String,
    img2: String,
    img3: String,
    img4: String,
    img5: String,
  },
  roomNumber: {
    type: Number,
    required: true,
  },
  id: {
    type: String,
    required: true,
    unique: true,
  },
  bedType: {
    type: String,
    required: true,
  },
  facilities: {
    type: [String],
  },
  rate: {
    type: Number,
    required: true,
  },
  offerPrice: {
    type: Number,
    required: true,
  },
  status: {
    type: Boolean,
    default: true,
  },
  description: String,
  start_date: {
    type: String,
  },
});

export const RoomModel = model<RoomsInterface>("Room", roomSchema);
