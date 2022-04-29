import https from "https";
import fs from "fs";
import express from "express";

let app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("../FrontEnd")); //Consumidor


const options = {
    key: fs.readFileSync("../certificado/priv_and_pub.key"),
    cert: fs.readFileSync("../certificado/CA.crt"),
};

https.createServer(options, app).listen(8443);