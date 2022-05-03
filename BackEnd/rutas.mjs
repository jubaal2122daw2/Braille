import {accederBDD} from "./database.mjs";
//import buscaLetra from "./database.mjs";
import express from "express";

var router = express.Router();

router.get("/abecedario", (req, res) => {
    console.log("Entra en la ruta /abecedario");
    accederBDD(); //n vez de accede 
    res.send("BDD creada");
});

export default router;