export interface RoomsInterface{
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
  description: string;
  start_date?: string | null
}