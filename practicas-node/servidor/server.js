const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let libros = [];

app.post('/libros/post', (req, res) => {
    libros.push(req.body);
    res.json({ mensaje: 'Libro agregado correctamente', libro: req.body });
});

app.delete('/libros/:id', (req, res) => {
    const idLibro = parseInt(req.params.id);
    res.json({ mensaje: 'Libro eliminado correctamente'});
});

app.put('/libros/:id', (req, res) => {
    const idLibro = parseInt(req.params.id);
    const datosActualizados = req.body;
    res.json({ mensaje: 'Libro actualizado correctamente' });
});

app.get('/libros', (req, res) => {
    res.json(libros);
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
