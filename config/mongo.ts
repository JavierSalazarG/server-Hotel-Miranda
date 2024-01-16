import mongoose from "mongoose";
const mongoDBUrl =
  "mongodb+srv://javisalazardev:NSHostTMnSpWh2fB@server-miranda.iqxigsn.mongodb.net/Hotel-Miranda";
export const connectMongo = async () => {
  try {
    await mongoose.connect(mongoDBUrl);
    console.log("----->  Conectado a mongo  <-----");
  } catch (error) {
    console.error("Error al conectar: ", error);
  }
};
