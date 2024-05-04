// RUTAS PARA USUARIOS
const express = require('express');
const router = express.Router();
const localController = require('../Controllers/localController');
const villaController = require('../Controllers/villaController');


// Api/Usuarios
//Rutas Casa
router.post('/casa', localController.crearCasa);
router.get('/casa', localController.listarCasa);
router.put('/casa/:id', localController.actualizarCasa);
router.get('/casa/:id', localController.obtenerCasa);
router.delete('/casa/:id', localController.eliminarCasa);
router.put('/casa/add-visita/:id', localController.agregarVisitaInmueble);


//Rutas Villa
router.post('/villa', villaController.crearVilla);
router.get('/villa', villaController.listarVilla);
router.put('/villa/:id', villaController.actualizarVilla);
router.get('/villa/:id', villaController.obtenerVilla);
router.delete('/villa/:id', villaController.eliminarVilla);
router.put('/villa/add-visita/:id', villaController.agregarVisitaInmueble);



//Rutas Locales
router.post('/local', localController.crearLocal);
router.get('/local', localController.listarLocal);
router.put('/local/:id', localController.actualizarLocal);
router.get('/local/:id', localController.obtenerLocal);
router.delete('/local/:id', localController.eliminarLocal);
router.put('/local/add-visita/:id', villaController.agregarVisitaInmueble);







module.exports = router;