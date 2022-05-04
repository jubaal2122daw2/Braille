import https from "https";
import fs from "fs";
import express from "express";
import rutas from './rutas.mjs';
import cors from 'cors';

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("../FrontEnd")); //Consumidor
app.use("/api", cors(), rutas); //para conectar con las rutas del backend. "Api se define como una ruta solo en el backend"
// app.use(cors(corsOptions));


const options = {
    key: fs.readFileSync("../certificado/priv_and_pub.key"),
    cert: fs.readFileSync("../certificado/CA.crt"),
};

https.createServer(options, app).listen(8443, () => {
    console.log('---Escoltant port 8443---');
  });