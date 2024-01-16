import express from "express";
//import server from "./server";
import { connectSQL } from "./config/sql";
const cors = require("cors");

export const app = express();
app.use(cors());
const port = process.env.NODE_ENV === "test" ? 3000 : 30100;
connectSQL();
app.use(express.json());
//app.use(server);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
