import https from "https";
import fs from "fs";
import express from "express";
// import accederBDD from "./BackEnd/server.mjs";
// import buscaLetra from "./BackEnd/database.mjs";
import rutas from './rutas.mjs';

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("../FrontEnd")); //Consumidor
app.use("/api", rutas); //para conectar con las rutas del backend.


const options = {
    key: fs.readFileSync("../certificado/priv_and_pub.key"),
    cert: fs.readFileSync("../certificado/CA.crt"),
};

https.createServer(options, app).listen(8443);