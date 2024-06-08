// RUTAS PARA USUARIOS
const express = require('express');
const router = express.Router();
const usuarioController = require('../Controllers/usuarioController');


// Api/Usuarios

router.post('/', usuarioController.crearUsuario);
router.get('/', usuarioController.listarUsuarios);
router.put('/:id', usuarioController.actualizarUsuario);
router.get('/:id', usuarioController.obtenerUsuario);
router.delete('/:id', usuarioController.eliminarUsuario);
router.post("/signin/", usuarioController.signin);




module.exports = router;