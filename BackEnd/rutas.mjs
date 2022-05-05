import {accederBDD} from "./database.mjs";
//import buscaLetra from "./database.mjs";
import express from "express";

var router = express.Router();

router.get("/abecedario", (req, res) => {
    console.log("Entra en la ruta /abecedario");
    accederBDD();
    res.send();
});

export default router; //Para que el servidor localice las rutas