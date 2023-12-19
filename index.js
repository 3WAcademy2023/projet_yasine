import express, { json } from "express";
import Routers from "./routes/routes.js";
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import connectDB from "./config/db.js";

const app = express();
dotenv.config();



const port =9090;

connectDB();





app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
// indice pour pointer sur le dossier public pour les fichiers
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "views");

app.use(Routers);

app.listen(port, () => {
  console.log(`listning port http://localhost:${port}`);
});




