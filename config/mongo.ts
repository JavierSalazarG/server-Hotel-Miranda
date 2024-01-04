import mongoose from "mongoose";

export const connectMongo = async () => {
  try {
    const mongoDBUrl =
      process.env.URL__DB ||
      "mongodb+srv://javisalazardev:NSHostTMnSpWh2fB@server-miranda.iqxigsn.mongodb.net/Hotel-Miranda";
    console.log(mongoDBUrl);
    await mongoose.connect(mongoDBUrl);

    console.log("----->  Conectado a mongo  <-----");
  } catch (error) {
    console.error("Error al conectar: ", error);
  }
};
