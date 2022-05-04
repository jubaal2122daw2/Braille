/**
 * Connexión con MongoDB.
 */
import { MongoClient } from "mongodb";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
const data = require("./abcedario.json");

async function accederBDD() {
    let url = "mongodb://127.0.0.1:27017/"; //ubicación db en local
    let client = await MongoClient.connect(url, { useNewUrlParser: true });

    try {
        let db = client.db("braille");
        console.log("BDD creada");

        let listarcolleciones = await db.listCollections({ name: "abecedario" }).toArray();

        if (listarcolleciones.length == 0) {
            let collection = await db.createCollection("abecedario");
            // await collection.insertMany([data]);
            for (const key of data.catalan) {
                await collection.insertOne(key);
            }
            console.log("Colección creada");

        }
        //console.log("Base de datos -->", data);
        await client.close();

    } catch (e) {
        console.log(e);
    }
}

async function buscaLetra(letra, imagen) {
    let url = "mongodb://127.0.0.1:27017/"; //ubicación db en local
    let client = await MongoClient.connect(url, { useNewUrlParser: true });
    let db = client.db("braille");
    let resultado = await db.collection("abecedario").findOne({ letra: letra, imagen: imagen });

    if (resultado) {
        console.log(`Se ha encontrado La letra '${letra}' en la Base de Datos`);
        console.log(resultado);
        return true;
    } else {
        console.log(`No existe la letra '${letra}' en la Base de Datos`);
        return false;
    }
}

export { accederBDD, buscaLetra };
