// rutas.js
const express = require('express');
const router = express.Router();
const Usuario = require('./usuario');

router.get('/usuarios', async (req, res) => {
    const usuarios = await Usuario.find();
    res.json(usuarios);
});

router.post('/usuarios', async (req, res) => {
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    res.json(nuevoUsuario);
});
const express = require('express');
const router = express.Router();
const { obtenerUsuarios, agregarUsuario } = require('./controladores');

router.get('/usuarios', obtenerUsuarios);
router.post('/usuarios', agregarUsuario);

module.exports = router;


