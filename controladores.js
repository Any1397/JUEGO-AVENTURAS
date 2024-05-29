// controladores.js
const Usuario = require('./usuario');

async function obtenerUsuarios(req, res) {
    const usuarios = await Usuario.find();
    res.json(usuarios);
}

async function agregarUsuario(req, res) {
    const nuevoUsuario = new Usuario(req.body);
    await nuevoUsuario.save();
    res.json(nuevoUsuario);
}

module.exports = {
    obtenerUsuarios,
    agregarUsuario
};
