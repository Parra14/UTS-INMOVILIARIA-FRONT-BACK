// RUTAS PARA USUARIOS
const express = require('express');
const router = express.Router();
const oficinaController = require('../Controllers/oficinaController');


// Api/Usuarios

router.post('/', oficinaController.crearOficina);
router.get('/', oficinaController.listarOficina);
router.put('/:id', oficinaController.actualizarOficina);
router.get('/:id', oficinaController.obtenerOficina);
router.delete('/:id', oficinaController.eliminarOficina);




module.exports = router;