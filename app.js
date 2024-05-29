// app.js
const express = require('express');
const mongoose = require('mongoose');
const rutas = require('./rutas');

const app = express();

mongoose.connect('mongodb://localhost:27017/nombre_de_tu_base_de_datos', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado a MongoDB');
}).catch(err => {
    console.error('Error al conectar a MongoDB:', err);
});

app.use(express.json());
app.use(rutas);

const puerto = 3000;
app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}`);
});
