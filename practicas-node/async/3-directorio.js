const fs = require('fs');
const util = require('util');

const readFileAsync = util.promisify(fs.readFile);

async function leerArchivo(nombreArchivo) {
    try {
        //contenido del archivo
        const contenido = await readFileAsync(nombreArchivo, 'utf8');
        console.log(`Contenido de ${nombreArchivo}:`);
        console.log(contenido);
    } catch (error) {
        console.error(`Error al leer ${nombreArchivo}:`, error);
    }
}

async function leerArchivosAsync(archivos) {
    console.log("Leyendo archivos...");
    for (const archivo of archivos) {
        await leerArchivo(archivo); 
    }
    console.log("Lectura de archivos completa.");
}

const archivos = ['archivo1.txt', 'archivo2.txt'];

leerArchivosAsync(archivos);
