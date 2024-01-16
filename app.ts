import express from "express";
import server from "./server";
const cors = require("cors");
import { connectMongo } from "./config/mongo";
export const app = express();
app.use(cors());
const port = process.env.NODE_ENV === "test" ? 3000 : 30100;
connectMongo();
app.use(express.json());
app.use(server);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
